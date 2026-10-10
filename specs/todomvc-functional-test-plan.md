# TodoMVC Functional Test Plan

## Application Overview

Comprehensive functional coverage for the React TodoMVC demo at https://demo.playwright.dev/todomvc/#/. The plan covers the blank initial state; task creation, editing, completion and deletion; item counts and bulk actions; filters and hash navigation; persistence; and negative and boundary inputs. Run every scenario independently from a blank/fresh TodoMVC state using tests/seed.spec.ts so prior local data cannot affect results. Expected behaviors are based on the observed app flows and standard TodoMVC functionality; boundary cases call out where the app should preserve user input safely.

## Test Scenarios

### 1. Initial state and task lifecycle

**Seed:** `tests/seed.spec.ts`

#### 1.1. Render the blank initial state

**File:** `specs/todomvc/initial-state.spec.ts`

**Steps:**
  1. Start from the blank state and open the TodoMVC root route (#/).
    - expect: The page title is React • TodoMVC and the page heading is todos.
    - expect: The new-todo textbox labeled What needs to be done? is available.
    - expect: No todo rows, item counter, bulk toggle, filter controls, or clear-completed button are shown.

#### 1.2. Add one todo with Enter

**File:** `specs/todomvc/add-todo.spec.ts`

**Steps:**
  1. Type Buy groceries into the new-todo textbox and press Enter.
    - expect: One row with the exact title Buy groceries appears.
    - expect: The input is cleared after submission.
    - expect: The footer shows 1 item left and the standard All, Active, and Completed filters.

#### 1.3. Ignore blank and whitespace-only submissions

**File:** `specs/todomvc/reject-empty-todo.spec.ts`

**Steps:**
  1. With an empty list, press Enter without typing, then type only spaces and press Enter.
    - expect: No todo row is created by either submission.
    - expect: The app remains in its empty-list state without a counter or filter footer.

#### 1.4. Allow duplicate titles as separate todos

**File:** `specs/todomvc/duplicate-todos.spec.ts`

**Steps:**
  1. Add the same title, Duplicate task, twice by entering it and pressing Enter after each entry.
    - expect: Two distinct todo rows with the same title are shown.
    - expect: The active-item count is 2; completing or deleting one row affects only that row.

#### 1.5. Preserve long and special-character titles safely

**File:** `specs/todomvc/todo-title-boundaries.spec.ts`

**Steps:**
  1. Add a long title (at least 500 characters) containing punctuation, accented characters, and angle-bracket text such as <b>not markup</b>.
    - expect: The title is displayed as text, not interpreted as markup.
    - expect: The row remains usable and the counter reports one active item.
    - expect: No characters are silently lost or transformed, unless a documented app limit is reached; if a limit exists, behavior is consistent and non-destructive.

#### 1.6. Edit a todo and save with Enter

**File:** `specs/todomvc/edit-todo.spec.ts`

**Steps:**
  1. Add Prepare draft, double-click its title, replace the edit textbox value with Prepare final draft, and press Enter.
    - expect: Double-click enters inline-edit mode with the current title available for editing.
    - expect: After Enter, the updated title is shown and the editor closes.
    - expect: The task remains one active item and appears once.

#### 1.7. Commit an edit when focus leaves the editor

**File:** `specs/todomvc/edit-todo-blur.spec.ts`

**Steps:**
  1. Add Review code, double-click the title, change it to Review pull request, then click outside the editor.
    - expect: The changed title is committed when the editor loses focus.
    - expect: The todo remains present once and the active count is unchanged.

#### 1.8. Cancel an edit with Escape

**File:** `specs/todomvc/cancel-todo-edit.spec.ts`

**Steps:**
  1. Add Keep original, enter inline-edit mode, replace the text with Temporary value, then press Escape.
    - expect: The editor closes and the original title Keep original is restored.
    - expect: The temporary title is not saved and the item count is unchanged.

#### 1.9. Remove a todo by saving an empty edit

**File:** `specs/todomvc/delete-empty-edit.spec.ts`

**Steps:**
  1. Add Remove me, double-click the title, clear the edit textbox, and press Enter.
    - expect: The item with an empty title is removed rather than retained as a blank row.
    - expect: The count decreases to zero and the app returns to the blank-list presentation.

#### 1.10. Delete individual and final todos

**File:** `specs/todomvc/delete-todo.spec.ts`

**Steps:**
  1. Add First and Second. Reveal the delete control for First and activate it.
    - expect: Only First is removed; Second remains and the active count is 1.
  2. Reveal and activate the delete control for the remaining task.
    - expect: The final row is removed and the empty-list presentation is restored.
    - expect: No stale count, filters, or bulk controls remain.

### 2. Completion status and bulk actions

**Seed:** `tests/seed.spec.ts`

#### 2.1. Toggle an individual task and update the active count

**File:** `specs/todomvc/toggle-todo.spec.ts`

**Steps:**
  1. Add Call the dentist, toggle its checkbox on, then toggle it off.
    - expect: The row visibly changes between active and completed states with each toggle.
    - expect: The active count changes from 1 to 0 and back to 1.
    - expect: A Clear completed control is available while a completed task exists and disappears after it is reactivated.

#### 2.2. Mark all tasks complete and active

**File:** `specs/todomvc/toggle-all.spec.ts`

**Steps:**
  1. Add three distinct tasks, complete one individually, and activate the master Mark all as complete checkbox.
    - expect: All rows become completed, including the previously completed row.
    - expect: The master checkbox is checked and the active count is 0.
  2. Activate the master checkbox again.
    - expect: All rows return to active, the master checkbox is unchecked, and the active count is 3.

#### 2.3. Clear completed tasks without deleting active tasks

**File:** `specs/todomvc/clear-completed.spec.ts`

**Steps:**
  1. Add one task to keep active and another to remove; complete only the latter, then activate Clear completed.
    - expect: All completed rows are removed and active rows remain unchanged.
    - expect: The active count matches the remaining active rows.
    - expect: Clear completed disappears when no completed rows remain.

#### 2.4. Clear all completed tasks to the empty state

**File:** `specs/todomvc/clear-all-completed.spec.ts`

**Steps:**
  1. Add two tasks, mark both complete, and activate Clear completed.
    - expect: Both rows are removed.
    - expect: The app returns to the blank-list presentation and no stale footer or bulk actions remain.

#### 2.5. Keep the item count accurate and grammatically correct

**File:** `specs/todomvc/item-count.spec.ts`

**Steps:**
  1. Add two tasks, complete one, then complete the other.
    - expect: The count tracks active tasks only: 2 items left, then 1 item left, then 0 items left.
    - expect: The count uses singular wording for one and plural wording for zero or multiple items.

### 3. Filtering, navigation, and persistence

**Seed:** `tests/seed.spec.ts`

#### 3.1. Filter tasks by All, Active, and Completed

**File:** `specs/todomvc/filters.spec.ts`

**Steps:**
  1. Add three tasks and mark exactly one complete. Select Active, Completed, and All in turn.
    - expect: Active shows only the two active tasks.
    - expect: Completed shows only the completed task.
    - expect: All shows all three tasks.
    - expect: The selected filter and URL hash stay aligned (#/active, #/completed, and #/).
    - expect: Filtering does not change task completion states or the active-item count.

#### 3.2. Show an empty result for a filter with no matching tasks

**File:** `specs/todomvc/empty-filter.spec.ts`

**Steps:**
  1. Add one active task and select Completed; then complete the task while viewing a filter that no longer matches it.
    - expect: The current filter shows no rows when no tasks match, without creating a blank task.
    - expect: Filter navigation remains available so the user can return to All or another filter.
    - expect: The global active count remains accurate regardless of the selected filter.

#### 3.3. Navigate filters with browser history

**File:** `specs/todomvc/filter-history.spec.ts`

**Steps:**
  1. Create a mixed active/completed list, visit Active and Completed, then use browser Back and Forward.
    - expect: Each history navigation restores the corresponding filter route and visible subset.
    - expect: Task data and completion states remain unchanged while navigating.

#### 3.4. Persist todos across reloads

**File:** `specs/todomvc/persistence.spec.ts`

**Steps:**
  1. Add two tasks, complete one, choose a filter, and reload the page.
    - expect: Both task titles and their completion states remain available after reload.
    - expect: The active count is restored correctly and all filters still show the correct subsets.
    - expect: The app loads without duplicate rows or reverting saved status.

#### 3.5. Add a task while a filter is active

**File:** `specs/todomvc/add-under-filter.spec.ts`

**Steps:**
  1. Add one completed task and select Active. Add a new task using the new-todo textbox.
    - expect: The new task is created as active and is visible in the Active view.
    - expect: Previously completed tasks remain completed and are not shown in Active.
    - expect: The active count increases by exactly one.
