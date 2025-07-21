---
description: "Manually trigger Slack notifications"
allowed-tools: ["Read", "Write", "Edit", "MultiEdit", "Glob", "Grep", "Bash", "LS", "TodoWrite", "mcp__slack__slack_post_message", "mcp__slack__slack_list_channels", "mcp__slack__slack_get_channel_history"]
---

# Slack Alert Command

Manually trigger Slack notifications for error tracking events and status updates.

## Usage
```
/slack-alert [ERROR_ID] [ALERT_TYPE] [MESSAGE]
```

## Parameters
- `ERROR_ID`: Unique identifier for the error
- `ALERT_TYPE`: Type of alert (initial|progress|escalation|resolution|manual)
- `MESSAGE`: Optional custom message to include

## Alert Types

### Initial Alert
- **Channel**: #cca-coi-updates-feed
- **Purpose**: First notification of error tracking
- **Content**: Session ID, error type, severity level
- **Format**: 🚨 ERROR TRACKING INITIATED: [ERROR_ID]

### Progress Alert
- **Channel**: #cca-coi-updates-feed
- **Purpose**: Update on resolution attempts
- **Content**: Attempt count, current status, next steps
- **Format**: 📊 PROGRESS UPDATE: [ERROR_ID] - Attempt [X]

### Escalation Alert
- **Channel**: #cca-coi-updates-feed
- **Purpose**: Alert when thresholds exceeded
- **Content**: Escalation reason, severity increase, support needed
- **Format**: ⚠️ ESCALATION: [ERROR_ID] requires attention

### Resolution Alert
- **Channel**: #echo-updates-feed
- **Purpose**: Announce successful resolution
- **Content**: Solution summary, resolution time, lessons learned
- **Format**: ✅ RESOLVED: [ERROR_ID] - [SOLUTION_SUMMARY]

### Manual Alert
- **Channel**: User-specified or default to #cca-coi-updates-feed
- **Purpose**: Custom notifications as needed
- **Content**: User-defined message
- **Format**: 🔔 MANUAL ALERT: [CUSTOM_MESSAGE]

## Procedure

### Phase 1: Alert Preparation
1. Read issue file for current context
2. Determine appropriate alert type if not specified
3. Format message according to alert type
4. Gather relevant metrics and timestamps

### Phase 2: Channel Selection
1. **Initial/Progress/Escalation**: #cca-coi-updates-feed
2. **Resolution**: #echo-updates-feed  
3. **Manual**: User-specified or default
4. Validate channel exists and is accessible

### Phase 3: Message Formatting
1. Apply appropriate emoji and formatting
2. Include session ID and error context
3. Add relevant metrics and timestamps
4. Ensure message meets channel guidelines

### Phase 4: Delivery & Logging
1. Post message to selected channel
2. Log notification in issue tracking file
3. Update global tracker with notification record
4. Schedule follow-up if required

## Message Templates

### Initial Tracking
```
🚨 ERROR TRACKING INITIATED
ID: [ERROR_ID]
Session: [SESSION_ID]
Severity: [LEVEL]
Type: [ERROR_TYPE]
Started: [TIMESTAMP]
```

### Progress Update
```
📊 PROGRESS UPDATE
ID: [ERROR_ID]
Attempt: [COUNT]
Status: [CURRENT_STATUS]
Duration: [ELAPSED_TIME]
Next: [PLANNED_ACTION]
```

### Escalation Notice
```
⚠️ ESCALATION REQUIRED
ID: [ERROR_ID]
Attempts: [COUNT]
Reason: [ESCALATION_TRIGGER]
Support Needed: [ASSISTANCE_TYPE]
Priority: [UPDATED_SEVERITY]
```

### Resolution Success
```
✅ SUCCESSFULLY RESOLVED
ID: [ERROR_ID]
Solution: [BRIEF_DESCRIPTION]
Duration: [TOTAL_TIME]
Attempts: [FINAL_COUNT]
Impact: [RESOLUTION_IMPACT]
```

This command provides comprehensive Slack integration for error tracking workflow notifications.