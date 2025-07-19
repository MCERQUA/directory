# Directory Setup Handler

## Slash Command Implementation

When `/directory-setup` is executed, this procedure will be followed:

### Step 1: Initialize Session
```
1. Generate new session ID with timestamp
2. Load setup-progress.json
3. Update session metadata
4. Display current progress summary
```

### Step 2: Planning Document Review
```
1. Read CHOSEN-PAGE-VARIANTS.md
2. Read SITE-STRUCTURE-PLAN.md  
3. Read IMPLEMENTATION-TASKS.md
4. Verify all planning documents are current
5. Update planning_review status in progress file
```

### Step 3: Production Assessment
```
1. Check live site: https://contractor-directory.netlify.app/
2. Analyze current App.tsx routing configuration
3. Review existing page components
4. Identify implemented vs missing features
5. Document current state vs planned state
6. Update production_assessment status
```

### Step 4: Task Execution Loop
```
For each incomplete task in priority order:
  1. Load task details from progress.json
  2. Check if prerequisites are met
  3. Execute task implementation
  4. Verify completion
  5. Update task status and files_modified
  6. Save progress to avoid data loss
  7. Continue to next task
```

### Step 5: Progress Tracking
```
After each task:
  1. Update task status and completion time
  2. Record any files modified
  3. Note any issues or blockers
  4. Calculate overall completion percentage
  5. Save progress.json
  6. Provide status update
```

### Task Execution Priority Order
```
High Priority (Must Complete First):
- Core Pages (Tasks 1-5)
- Main Navigation (Task 35)
- Authentication (Tasks 6-7)
- Dashboard Home (Task 10)

Medium Priority:
- Dashboard Pages (Tasks 11-18)
- Booking System (Tasks 28-30)
- Static Pages (Tasks 19-27)

Low Priority:
- Advanced Features (Tasks 31-34, 36)
```

### Error Handling & Recovery
```
If session is interrupted:
1. Current progress is saved in setup-progress.json
2. Next session will resume from last completed task
3. Failed tasks are marked for retry
4. Rollback capability for partially completed tasks
```

### Completion Criteria
```
Task is marked complete only when:
1. All subtasks are implemented
2. Files are properly modified
3. Routes are configured correctly
4. Manual verification confirms functionality
5. No blocking errors exist
```

### Session Summary
```
At end of each session:
1. Display completion percentage
2. List tasks completed this session
3. Note any issues encountered
4. Recommend next tasks for future sessions
5. Backup progress file
```

## Usage Instructions

**To start setup:**
```
/directory-setup
```

**To continue previous session:**
```
/directory-setup
(Will automatically detect and resume from last progress)
```

**To check progress without executing:**
```
Check setup-progress.json for current status
```

This system ensures that the directory setup can be completed across multiple sessions with full tracking and recovery capabilities.