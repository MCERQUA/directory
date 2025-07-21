---
description: "Log attempt and update trackers"
allowed-tools: ["Read", "Write", "Edit", "MultiEdit", "Glob", "Grep", "Bash", "LS", "TodoWrite", "mcp__slack__slack_post_message"]
---

# Log Resolution Command

Document resolution attempts, update tracking systems, and manage error lifecycle progression.

## Usage
```
/log-resolution [ERROR_ID] [STATUS] [NOTES]
```

## Parameters
- `ERROR_ID`: Unique identifier for the error
- `STATUS`: Resolution status (attempt|success|blocked|stalled)
- `NOTES`: Optional description of actions taken

## Procedure

### Phase 1: Attempt Logging
1. Read current issue file: `.claude/error-tracking/issue-[ID].md`
2. Increment attempt counter
3. Add timestamp and status update
4. Record detailed resolution notes

### Phase 2: Status Processing
1. **ATTEMPT**: Log progress and continue tracking
2. **SUCCESS**: Mark resolved and prepare for archival
3. **BLOCKED**: Update status and set review trigger
4. **STALLED**: Flag for escalation review

### Phase 3: Tracker Updates
1. Update global tracker: `docs/AI-ERROR-TRACKER.md`
2. Refresh attempt count and status
3. Update last activity timestamp
4. Recalculate resolution metrics

### Phase 4: Notification Management
1. Post progress update if significant milestone
2. Trigger success notification for resolutions
3. Alert on threshold breaches (3+ attempts)
4. Schedule follow-up checks if needed

## Success Resolution Process
1. Mark issue as RESOLVED with solution details
2. Move to `.claude/error-tracking/resolved/` archive
3. Post celebration message to #echo-updates-feed
4. Update global statistics
5. Generate lessons learned summary

## Blocked Issue Handling
1. Update status to BLOCKED with blocker details
2. Set review reminder for dependency check
3. Escalate if external blocker persists
4. Document workaround strategies

## Progress Metrics
- **Velocity**: Progress per attempt
- **Complexity**: Issue difficulty assessment
- **Impact**: System effect measurement
- **Resolution Time**: Total time to fix

## Notification Triggers
- **First Success**: Immediate celebration
- **Threshold Breach**: Alert team
- **Long Stall**: Investigation review
- **Critical Block**: Urgent escalation

## Archive Structure
```
.claude/error-tracking/resolved/
├── issue-[ID]-resolved.md
└── [YYYY-MM]/
    └── monthly-summary.md
```

This command maintains comprehensive resolution tracking with automated lifecycle management.