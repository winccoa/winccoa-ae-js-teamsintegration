import { WinccoaManager } from "winccoa-manager";

const winccoa = new WinccoaManager();

const URL_DATAPOINT = "Teams.Config.WebhookUrl:_original.._value";
const SEND_DATAPOINT = "Teams.Message.send:_original.._value";
const MESSAGE_DATAPOINTS = [
  "Teams.Message.color:_original.._value",
  "Teams.Message.title:_original.._value",
  "Teams.Message.text:_original.._value",
  "Teams.Message.summary:_original.._value"
];

let sendConnectionId = null;
let workflowUrl = null;

function startMessageConnection() {
  if (sendConnectionId !== null) return;

  sendConnectionId = winccoa.dpConnect(async (_, values) => {
    try {
      const send = values[0];
      if (!send || !workflowUrl) return;

      const [color, title, text, summary] = await winccoa.dpGet(MESSAGE_DATAPOINTS);

      console.log("Sending message:", { color, title, text, summary });

      if (!title || !text) {
        console.log("Missing title or text, skipping send");
        return;
      }

      const payload = {
        "type": "AdaptiveCard",
        "version": "1.4",
        "body": [
          {
            "type": "TextBlock",
            "size": "Large",
            "weight": "Bolder",
            "text": title,
            "color": color,
          },
          {
            "type": "TextBlock",
            "text": text
          },
        ]
      }

      const response = await fetch(workflowUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const responseText = await response.text();

      console.log("Status:", response.status);
      console.log("Response:", responseText);
      console.log("!!!!!!!!!!!:", responseText);

      if (!response.ok && response.status !== 202) {
        console.log("Workflow call failed");
      }
    } catch (err) {
      console.log("Send error:", err?.message || err);
    }
  }, SEND_DATAPOINT, false);

  console.log("Message connection started, ID:", sendConnectionId);
}

function stopMessageConnection() {
  if (sendConnectionId !== null) {
    winccoa.dpDisconnect(sendConnectionId);
    console.log("Message connection stopped, ID:", sendConnectionId);
    sendConnectionId = null;
  }
}

function onUrlChanged(url) {
  console.log("Workflow URL changed:", url);

  stopMessageConnection();

  if (url && typeof url === "string" && url.trim() !== "") {
    workflowUrl = url.trim();
    console.log("Teams workflow URL initialized");
    startMessageConnection();
  } else {
    workflowUrl = null;
    console.log("Workflow URL is empty, Teams connection disabled");
  }
}

function main() {
  winccoa.dpConnect((_, values) => {
    onUrlChanged(values[0]);
  }, URL_DATAPOINT);
}

main();