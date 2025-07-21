---
description: "Initialize error tracking with Slack integration"
allowed-tools: ["Read", "Write", "Edit", "MultiEdit", "Glob", "Grep", "Bash", "LS", "TodoWrite", "mcp__slack__slack_post_message", "mcp__slack__slack_list_channels"]
---

# Track Error Command

Initialize comprehensive error tracking for persistent issues with automatic Slack integration and systematic documentation.

## Usage
```
/track-error [ERROR_ID]
```

## Parameters
- `ERROR_ID`: Unique identifier for the error (auto-generated if not provided)

## Procedure

### Phase 1: Error Registration
1. Generate unique error ID if not provided (format: ERR-[timestamp])
2. Create individual issue file: `.claude/error-tracking/issue-[ID].md`
3. Initialize error tracking template with metadata
4. Post initial alert to #cca-coi-updates-feed Slack channel

### Phase 2: Documentation Setup
1. Update global tracker: `docs/AI-ERROR-TRACKER.md`
2. Record error details, session ID, and initial assessment
3. Set severity level based on impact analysis
4. Create tracking entry with timestamp and context

### Phase 3: Investigation Framework
1. Set up systematic approach structure
2. Initialize attempt counter
3. Create progress tracking checklist
4. Establish success criteria

### Phase 4: Notification System
1. Configure Slack monitoring for updates
2. Set up automatic alerts for attempt thresholds
3. Initialize progress reporting framework
4. Establish resolution notification triggers

## Error Classification
- **CRITICAL**: System-breaking, blocks all progress
- **HIGH**: Major functionality affected
- **MEDIUM**: Feature-specific, workarounds available
- **LOW**: Minor issues, cosmetic problems

## Session ID Format
SESSION-[TIMESTAMP]-[ISSUE_ID]
Example: SESSION-1705321200-456

## Tracking Files
- **Individual Issue**: `.claude/error-tracking/issue-[ID].md`
- **Global Tracker**: `docs/AI-ERROR-TRACKER.md`
- **Progress Log**: Embedded in issue file

## Integration Features
- Automatic Slack notifications
- Progress threshold monitoring
- Cross-session persistence
- Resolution tracking
- Archive management

This command initiates the mandatory error tracking protocol for issues requiring systematic investigation and resolution.