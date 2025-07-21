---
description: "Review attempts and trigger alerts if needed"
allowed-tools: ["Read", "Write", "Edit", "MultiEdit", "Glob", "Grep", "Bash", "LS", "TodoWrite", "mcp__slack__slack_post_message", "mcp__slack__slack_get_channel_history"]
---

# Check Progress Command

Review error resolution attempts, assess progress, and trigger automatic alerts if attempt thresholds are exceeded.

## Usage
```
/check-progress [ERROR_ID]
```

## Parameters
- `ERROR_ID`: Unique identifier for the error to check

## Procedure

### Phase 1: Status Assessment
1. Read issue file: `.claude/error-tracking/issue-[ID].md`
2. Parse attempt counter and resolution status
3. Review progress notes and timestamps
4. Assess current severity level

### Phase 2: Threshold Analysis
1. Check attempt count against protocol limits
2. Evaluate time elapsed since initial tracking
3. Assess progress velocity and effectiveness
4. Determine if escalation is required

### Phase 3: Alert Processing
1. **3+ Attempts**: Post alert to #cca-coi-updates-feed
2. **5+ Attempts**: Escalate severity and notify team
3. **Stalled Progress**: Trigger investigation review
4. **Resolution Achieved**: Prepare completion notifications

### Phase 4: Progress Reporting
1. Update global tracker with current status
2. Generate progress summary report
3. Post status update to Slack if warranted
4. Schedule next progress check if needed

## Threshold Triggers
- **3 Attempts**: Mandatory Slack alert
- **5 Attempts**: Severity escalation
- **24 Hours**: Stalled progress review
- **Resolution**: Archive and celebrate

## Alert Channels
- **Primary**: #cca-coi-updates-feed (progress alerts)
- **Success**: #echo-updates-feed (resolution announcements)
- **Escalation**: Direct notifications to team

## Status Categories
- **ACTIVE**: Currently being worked on
- **STALLED**: No progress in 24+ hours
- **BLOCKED**: Waiting for external dependency
- **RESOLVED**: Successfully completed
- **ARCHIVED**: Moved to resolved archive

## Progress Metrics
- Attempt count
- Time elapsed
- Resolution velocity
- Complexity assessment
- Success probability

This command provides systematic progress monitoring with automatic escalation for persistent issues.