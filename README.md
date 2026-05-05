# WinCC OA Microsoft Teams Integration  
Send WinCC OA Alarms and Events Directly to Microsoft Teams  

---

## Overview  
Integrate WinCC OA with Microsoft Teams to deliver alarms, events, and custom messages directly to your collaboration environment.  

Using Power Automate workflows and incoming webhooks, this solution enables a simple and reliable way to forward notifications from WinCC OA to Teams channels or chats, without complex integrations.  

With minimal configuration, operators and engineers can stay informed and react faster to critical events.  

**Detect → Notify → React**


---
<img width="754" height="424" alt="Teams" src="https://github.com/user-attachments/assets/8ff5782b-5b4e-4be2-8269-78016ca78a51" />

*Figure 1: Architecture Overview*

---

## Version  
WinCC OA 3.20 P0 or higher  

## Application Name  
WinCC OA Microsoft Teams Integration  

---

## Key Features  

### Direct Notification Integration  
- Send WinCC OA alarms and messages to Microsoft Teams  
- Support for both channels and group chats  
- Integration via Power Automate webhook workflows  
- Reliable message delivery using standard WinCC OA mechanisms  

### Simple Configuration  
- Webhook URL stored in a dedicated datapoint  
- Message triggering via a single boolean flag  
- Structured datapoint type for configuration and messaging  
- Easy setup using standard PARA and dplist import  

### Flexible Message Design  
- Custom title and message text  
- Predefined message colors (default, good, warning, attention, etc.)  
- Clear visual representation in Microsoft Teams  

---
<img width="754" height="424" alt="Teams-GIF" src="https://github.com/user-attachments/assets/4fe9db8b-4bfd-4aab-9e5b-1402505dd5ce" />

*Video 01 - Microsoft Teams: Alarm & Event Notification Demo*

## Conclusion  
This integration provides a straightforward way to connect WinCC OA with Microsoft Teams and improve operational communication.  

By sending notifications directly to collaboration tools, teams can react faster and improve overall system awareness with minimal engineering effort.  

---

## Content  

This repository includes the project folder, documentation, and legal information of the application example, organized as follows:

- **WinCCOATeams/**: Application example subproject for Microsoft Teams integration, including panels, color database, datapoint configuration, stylesheet, and JavaScript manager  
- **WinCCOATeamsExample.pdf**: Documentation covering implementation, installation, and usage  
- **package.winccoa.json**: Package definition file containing metadata, versioning, keywords, and subproject configuration for deployment  
- **OSS.md**: Open Source Software information  
- **LEGAL_INFO.md**: Legal information  
- **LICENSE.md**: License information  
- **README.md**: This file   

