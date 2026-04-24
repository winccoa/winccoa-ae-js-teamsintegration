# WinCC OA Microsoft Teams Integration Application Example  
**Seamless Alarm & Event Notifications from WinCC OA to Microsoft Teams**

---

## Overview

This example demonstrates how to integrate **WinCC OA** with **Microsoft Teams** to deliver alarms, events, and custom messages directly into your collaboration environment.

By leveraging **incoming webhooks** and **Power Automate (Workflows)**, the solution enables a lightweight and reliable notification pipeline—without requiring complex middleware or external services.

With minimal setup effort, operators and engineers can stay continuously informed and respond faster to critical system events.

**Detect → Notify → React**
<img width="754" height="424" alt="Teams" src="https://github.com/user-attachments/assets/8ff5782b-5b4e-4be2-8269-78016ca78a51" />

---

## Compatibility

- **WinCC OA Version**: 3.20 P0 or higher  

---

## Key Features

### Real-Time Notifications
- Forward alarms, events, and custom messages from WinCC OA to Microsoft Teams  
- Supports both **Teams channels** and **group chats**  
- Reliable delivery based on standard WinCC OA mechanisms  

---

### Simple and Structured Configuration
- Webhook URL stored in a dedicated configuration datapoint  
- Message triggering via a single boolean flag  
- Predefined datapoint structure for consistent usage  
- Easy setup using **PARA** and **dplist import**  

---

### Flexible Message Formatting
- Customizable message **title** and **content**  
- Predefined message color states for visual clarity:
  - `default`
  - `good`
  - `warning`
  - `attention`
  - `accent`
- Clean and structured presentation in Microsoft Teams  

---

### Ready-to-Use Example Setup
- Included test panel: `teams.pnl`  
- JavaScript Manager for automated message dispatching  
- Immediate validation without additional development effort  

---

## Architecture

WinCC OA → Webhook (Power Automate / Workflows) → Microsoft Teams

---

## Project Structure

WinCCOATeams/
├── colorDB/        # Contains the Message color definitions  
├── dplist/         # Contains the dplist to be imported  
├── javascript/     # Contains the webhook handling logic  
├── panels/         # Contains the UI test panel  
├── config/         # Contains the Configuration files  

---

## Quick Start Guide

1. Extract `WinCCOATeams.zip` and register it as a **subproject**  
2. Import `TeamsIntegrationManager.dpl` using **PARA**  
3. Create a webhook in Microsoft Teams (via Workflows / Power Automate)  
4. Store the webhook URL in:
   Teams.config.WebhookUrl  
5. Navigate to:
   javascript/TeamsIntegration/  
   and run:  
   npm install  
6. Start the **JavaScript Manager** with:  
   TeamsIntegration/index.js  
7. Open `teams.pnl` and send a test message  

---

## How It Works

1. A message is defined in a datapoint (title, text, color)  
2. The message is triggered by setting a boolean flag (`send = TRUE`)  
3. The JavaScript Manager processes the request  
4. A webhook call is sent to Microsoft Teams  

5. The message appears instantly in the configured Teams destination  
<img width="754" height="424" alt="Teams-GIF" src="https://github.com/user-attachments/assets/4fe9db8b-4bfd-4aab-9e5b-1402505dd5ce" />

---

## Use Cases

- Alarm forwarding to operations teams  
- Event notifications for maintenance or engineering  
- Integration into incident management workflows  
- Timely collaboration between control room and IT teams

---

## Conclusion

This example provides a clean, efficient, and production-ready approach to integrating WinCC OA with Microsoft Teams.

It reduces response time, improves visibility, and enhances collaboration—without adding unnecessary complexity to your system architecture.

---

## Keywords

WinCC OA, Microsoft Teams, SCADA notifications, webhook integration, Power Automate, industrial alarms, real-time monitoring  
