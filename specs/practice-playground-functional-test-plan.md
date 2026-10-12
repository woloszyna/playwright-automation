# Practice Playground Functional Test Plan

## Application Overview

Functional test plan for the Practice Playground at https://www.playwrightautomation.com/practice.html, launched through tests/seed.spec.ts. The page is a collection of independent browser-automation exercises. Coverage includes form controls and validation, dropdown widgets, uploads/downloads, tables, dialogs and input interactions, tabs/windows and popup communication, frames, calendars/date pickers, interactive SVG/map widgets, and navigation to linked labs. Run each scenario independently from a fresh browser context and the seeded practice page unless setup steps define the data. Avoid assuming backend persistence where the UI does not promise it; assert observable page state, validation, and browser events.

## Test Scenarios

### 1. Form Controls

**Seed:** `tests/seed.spec.ts`

#### 1.1. Initial page and module navigation

**File:** `specs/practice-playground/navigation.spec.ts`

**Steps:**
  1. Open the seeded /practice.html page and inspect the page title, Practice Playground heading, primary navigation, module navigation, and Form Controls section.
    - expect: Practice Playground loads without an error page and the title identifies the practice playground.
    - expect: The page exposes the main modules and their expected in-page navigation targets.
    - expect: Selecting a module navigation item moves to the corresponding section and does not navigate to an unrelated URL.
  2. Navigate to the last module and back to the first module using the page’s section navigation.
    - expect: Both target sections become reachable and visible.
    - expect: Navigation remains usable after scrolling and the correct section is targeted.

#### 1.2. Submit the text-input form with valid values

**File:** `specs/practice-playground/text-inputs.spec.ts`

**Steps:**
  1. In Text Inputs, fill Name, Email, and Address with valid values and submit the form.
    - expect: The form accepts valid text, email, and multiline address input.
    - expect: A visible success/result state reflects the submitted values or confirms submission.
    - expect: No unrelated form fields are changed.

#### 1.3. Validate required and malformed text-input values

**File:** `specs/practice-playground/text-input-validation.spec.ts`

**Steps:**
  1. Submit the Text Inputs form with all fields empty, then submit with a malformed email and otherwise valid values.
    - expect: Required-field and email validation prevent invalid submission.
    - expect: Validation is visible and associated with the relevant field or browser-native validity state.
    - expect: No success result is shown for invalid input.
  2. Enter boundary values: whitespace-only required text, an address containing multiple lines and punctuation, and an email with leading/trailing whitespace.
    - expect: Whitespace-only required values are not silently accepted as meaningful input, or behavior follows the page’s explicit validation rule.
    - expect: Multiline address content is handled without breaking the form.
    - expect: Email validation has consistent behavior for surrounding whitespace and malformed addresses.

#### 1.4. Reset text-input and radio forms

**File:** `specs/practice-playground/form-reset-radio.spec.ts`

**Steps:**
  1. Fill the text fields, select a radio option, then activate each relevant Reset control.
    - expect: Reset clears or restores the associated form’s initial values only.
    - expect: Radio group permits exactly one selected value at a time.
    - expect: Selecting each gender option updates the checked state without selecting another option.
  2. Attempt to submit the radio group without a selection if its form provides a submit action.
    - expect: Required selection is validated if the group is mandatory; optional groups remain unselected without an erroneous result.

#### 1.5. Select individual weekdays and use Select All

**File:** `specs/practice-playground/checkboxes.spec.ts`

**Steps:**
  1. Select Sunday and Wednesday, then activate Select All.
    - expect: Selected weekday checkboxes are checked.
    - expect: Select All checks every weekday and reflects the all-selected state.
  2. Deselect one weekday after Select All, then reselect it; also toggle all weekdays off if supported.
    - expect: The master control reflects partial/indeterminate and all/none states accurately.
    - expect: Individual selection remains independent and no unrelated checkbox changes.

#### 1.6. Operate toggle switches

**File:** `specs/practice-playground/toggle-switches.spec.ts`

**Steps:**
  1. Toggle Enable Notifications, Email Alerts, and Auto Save on and off independently.
    - expect: Each switch’s checked/on state changes when activated.
    - expect: Changing one switch does not change the state of the other switches.
    - expect: Keyboard activation works where switches are exposed as accessible checkbox controls.

#### 1.7. Select multiple options with duplicate labels

**File:** `specs/practice-playground/multi-select.spec.ts`

**Steps:**
  1. In Clothing brands, select multiple distinct brands, including an option whose visible text is duplicated, then deselect one selected option.
    - expect: More than one option can be selected simultaneously.
    - expect: Selection identifies the intended option even when visible labels are duplicated.
    - expect: Deselecting one option preserves all other selections.
  2. Clear all options and attempt selection using keyboard navigation.
    - expect: The empty selection is represented accurately.
    - expect: Keyboard selection and deselection produce the same state as pointer interaction.

#### 1.8. Reveal and use the delivery tooltip

**File:** `specs/practice-playground/tooltip.spec.ts`

**Steps:**
  1. Reveal the delivery estimate tooltip using hover, focus, or activation on the Delivery estimate control.
    - expect: The tooltip becomes visible with its explanatory content and is associated with the trigger.
    - expect: Moving focus or pointer away hides the transient tooltip when appropriate.
    - expect: The tooltip is usable without obscuring or disabling surrounding controls.

#### 1.9. Show and hide an element

**File:** `specs/practice-playground/show-hide.spec.ts`

**Steps:**
  1. Inspect Target field, activate Hide Element, then activate Show Element.
    - expect: Hide Element makes the target not visible while preserving expected DOM or state behavior.
    - expect: Show Element restores visibility and the target remains operable.
    - expect: Repeated hide/show operations are idempotent and do not create duplicate targets.

#### 1.10. Toggle hidden and AJAX-loaded controls

**File:** `specs/practice-playground/hidden-ajax.spec.ts`

**Steps:**
  1. Toggle Input Box 2 and Checkbox 2 off and on, checking their visibility/presence and state after each operation.
    - expect: Each control follows its toggle action independently.
    - expect: A hidden control cannot be interacted with as a visible control; it becomes available again when shown.
    - expect: Existing values or checked state are preserved or reset consistently with the app’s behavior.
  2. Activate Load AJAX Content and wait for the result; activate it again if repeat use is supported.
    - expect: Asynchronous content appears only after the action completes and is identifiable as loaded content.
    - expect: The test waits on the content/state rather than a fixed delay.
    - expect: Repeated loading does not produce duplicate or stale content, and errors do not appear as successful content.

### 2. Dropdowns

**Seed:** `tests/seed.spec.ts`

#### 2.1. Select country and sorted animal options

**File:** `specs/practice-playground/static-dropdowns.spec.ts`

**Steps:**
  1. Inspect the static dropdown options, select a country, then select several animals from Sorted Animals.
    - expect: Country selection updates to the chosen option.
    - expect: Animal options are available in ascending alphabetical order.
    - expect: Selected value and option ordering remain correct after changing selection.
  2. Attempt to select the placeholder option and inspect default values on a fresh page.
    - expect: Placeholder/default selection is represented correctly and is not mistaken for a valid country.
    - expect: No stale selection leaks from another dropdown.

#### 2.2. Use Bootstrap dropdown

**File:** `specs/practice-playground/bootstrap-dropdown.spec.ts`

**Steps:**
  1. Open the Bootstrap Dropdown, choose an option, and reopen it.
    - expect: The menu opens and closes predictably.
    - expect: Choosing an option applies the selected action/value and closes the menu as expected.
    - expect: Clicking outside or pressing Escape dismisses the open menu without accidental selection.

#### 2.3. Search and select autocomplete suggestions

**File:** `specs/practice-playground/autosuggest.spec.ts`

**Steps:**
  1. Type a complete known product query into Search for Products and select its matching suggestion.
    - expect: Suggestions reflect the query and the selected product populates the input or selection result.
    - expect: The chosen suggestion is committed and the list closes as expected.
  2. Search using a partial query, a query with no matches, different letter casing, and an empty query.
    - expect: Partial matches are filtered appropriately and case behavior is consistent.
    - expect: No-match and empty-query states do not allow a nonexistent result to be selected.
    - expect: Clearing the query restores the initial suggestion behavior.

#### 2.4. Searchable custom dropdown

**File:** `specs/practice-playground/searchable-dropdown.spec.ts`

**Steps:**
  1. Open Type to search skills…, search for a known skill, and select the result.
    - expect: The custom dropdown opens and filters matching choices.
    - expect: The selected skill is shown in the field and the dropdown closes.
    - expect: The widget can be opened and searched again.
  2. Search a term with no matches, clear it, and try keyboard navigation and Escape.
    - expect: No-match state is explicit and does not change the selected value.
    - expect: Clearing restores choices, keyboard navigation selects only focused options, and Escape closes without unintended selection.

#### 2.5. Dynamic country-state-city dropdown dependencies

**File:** `specs/practice-playground/dependent-dropdown.spec.ts`

**Steps:**
  1. Verify State and City are disabled initially. Select a country, then select a populated state and city.
    - expect: State and City begin disabled until their parent selection is made.
    - expect: Selecting a country enables and populates State; choosing a state enables and populates City.
    - expect: The selected values remain coherent with the selected parent values.
  2. Change the country after selecting a state and city; also return country to its placeholder if possible.
    - expect: Dependent selections reset when their parent becomes invalid.
    - expect: State and City options correspond to the newly selected country and do not retain stale values.
    - expect: Returning to the placeholder disables dependent fields again.

### 3. File Handling

**Seed:** `tests/seed.spec.ts`

#### 3.1. Upload one valid file and reset

**File:** `specs/practice-playground/upload-single.spec.ts`

**Steps:**
  1. Upload a supported file using Upload Single File and verify the displayed filename/result; then use its Reset control.
    - expect: The selected filename and any upload result identify the selected file.
    - expect: Reset clears the selected file and related result.
    - expect: A new file can be selected after reset.
  2. Attempt submission with no file and upload an unsupported or empty file if the control provides such validation.
    - expect: Missing or invalid files produce a clear validation/error state and no success-shaped result.

#### 3.2. Upload multiple files

**File:** `specs/practice-playground/upload-multiple.spec.ts`

**Steps:**
  1. Select two supported files with Upload Multiple Files, then select a different file set.
    - expect: Multiple selected files are accepted and reported distinctly.
    - expect: Replacing the selection removes stale filenames/results.
    - expect: Reset clears the full file selection.
  2. Try zero files, a single file, duplicate filenames from different paths if feasible, and a file above the documented size limit if one is specified.
    - expect: Zero files is handled without a false success.
    - expect: Single-file behavior is supported consistently with the multiple-file control.
    - expect: Duplicate names remain distinguishable where possible; size-limit behavior is explicit and safe.

#### 3.3. Upload through hidden input and file chooser buttons

**File:** `specs/practice-playground/upload-challenges.spec.ts`

**Steps:**
  1. Use Upload Resume and Browse Files controls, choose a supported file through the chooser, then reset.
    - expect: Each visible action opens the intended file chooser and sets the correct underlying file input.
    - expect: Selected file information is visible and resettable.
    - expect: The hidden input cannot be mistaken for an independently visible user control.
  2. Cancel the chooser without selecting a file and activate Reset with no file selected.
    - expect: Cancel leaves the form in its prior state and does not fabricate a file selection.
    - expect: Reset with no selection does not cause an error.

#### 3.4. Download files and open PDF

**File:** `specs/practice-playground/downloads.spec.ts`

**Steps:**
  1. Activate each relevant Download action and capture the browser download; use Open PDF in New Tab for the PDF route.
    - expect: Each download completes with the expected non-empty file and a sensible filename/content type.
    - expect: The PDF opens in a separate tab when using the open action; the original practice page remains available.
    - expect: Unavailable or blocked downloads report an error rather than appearing successful.

#### 3.5. End-to-end Excel playground workflow

**File:** `specs/practice-playground/excel-workflow.spec.ts`

**Steps:**
  1. Open Excel Playground, perform its download/modify/re-upload/validation workflow using the provided sample/template, and submit the completed workbook.
    - expect: The playground opens successfully and provides its required template/data.
    - expect: A valid workbook upload is accepted and validation results match the workbook data.
    - expect: Invalid or incomplete workbooks produce actionable validation feedback and are not reported as valid.

### 4. Tables

**Seed:** `tests/seed.spec.ts`

#### 4.1. Read static web table values

**File:** `specs/practice-playground/static-table.spec.ts`

**Steps:**
  1. Inspect the Static Web Table headers, row count, and representative values from the beginning, middle, and end.
    - expect: Headers align with their columns and each row’s cell values are in the correct columns.
    - expect: All expected static rows are present and readable.

#### 4.2. Regenerate dynamic table

**File:** `specs/practice-playground/dynamic-table.spec.ts`

**Steps:**
  1. Record the Dynamic Table headers, dimensions, and selected cell values, then activate Regenerate.
    - expect: The table is generated with a valid header/row structure and non-empty expected data.
    - expect: Regenerate updates the generated table without duplicating rows or losing headers.
    - expect: Assertions target the newly rendered table state, not a stale prior row.

#### 4.3. Search, paginate, and change rows per page

**File:** `specs/practice-playground/pagination-table.spec.ts`

**Steps:**
  1. Search for a value in the pagination table, clear the search, change Rows per page through 10, 25, 50, and All where available, and navigate First/Previous/Next/Last.
    - expect: Search filters matching rows and an unmatched query displays an empty result state.
    - expect: Changing page size updates visible row count and page count appropriately.
    - expect: Pagination controls move to the correct page; First/Previous are disabled at the first page and Next/Last at the last page.
    - expect: Clearing search restores the unfiltered dataset and leaves pagination in a valid state.
  2. Select a row using its checkbox, use the table’s select-all control, then deselect one row.
    - expect: Row selection and select-all state stay synchronized, including partial selection where supported.
    - expect: Selections do not select unrelated rows or persist incorrectly after a filter/page change.

#### 4.4. Flight booking table assignment

**File:** `specs/practice-playground/flight-booking.spec.ts`

**Steps:**
  1. Complete a valid flight booking using distinct departure and destination cities and valid passenger/date inputs; submit the booking.
    - expect: Valid booking details are accepted and the confirmation reflects selected values.
    - expect: Departure and destination cannot be the same when the form’s rule disallows it.
    - expect: Required fields prevent incomplete bookings and expose field-specific validation.
  2. Try boundary booking values including same-city travel, missing dates, dates in the past, and minimum/maximum passenger counts shown by the controls.
    - expect: Business-rule violations are rejected with clear feedback.
    - expect: Valid boundary passenger counts and date limits are accepted; values outside allowed bounds are blocked.

### 5. Dialogs and Interactions

**Seed:** `tests/seed.spec.ts`

#### 5.1. Handle JavaScript alert, confirm, and prompt

**File:** `specs/practice-playground/alerts-popups.spec.ts`

**Steps:**
  1. Trigger each alert, confirm, and prompt action; accept the alert, accept and dismiss the confirm in separate runs, and submit both non-empty and empty prompt values.
    - expect: The correct dialog type appears with expected text and buttons.
    - expect: Alert acceptance closes the dialog; confirm acceptance/dismissal produces the corresponding page result.
    - expect: Prompt acceptance returns entered text and cancellation returns the cancel result without creating a success state.

#### 5.2. Mouse actions

**File:** `specs/practice-playground/mouse-actions.spec.ts`

**Steps:**
  1. Exercise the available hover, click, double-click, right-click, and drag/drop interactions on their designated targets.
    - expect: Each action produces its intended visible state/result and does not trigger a different action.
    - expect: Drag/drop updates source and destination state only after a valid drop.
    - expect: Targets remain usable after repeated interactions.

#### 5.3. Keyboard actions and clipboard

**File:** `specs/practice-playground/keyboard-actions.spec.ts`

**Steps:**
  1. Type a phrase character by character, use the Tab here field sequence, and exercise Ctrl+V using the supported clipboard setup.
    - expect: Typed text appears in the intended field in the right order.
    - expect: Tab navigation follows a sensible accessible focus order.
    - expect: Clipboard paste inserts the expected content; unsupported clipboard permission is surfaced rather than misreported.
  2. Use Generate Summary with empty and populated input values.
    - expect: A summary is generated from valid populated values.
    - expect: Empty or malformed input is handled with validation and does not generate misleading output.

#### 5.4. Infinite scroll and dynamically revealed buttons

**File:** `specs/practice-playground/scrolling-dynamic-button.spec.ts`

**Steps:**
  1. Open Infinite Scroll Playground, scroll through multiple batches, then reach the end of available content.
    - expect: Additional content appears as scrolling reaches its trigger point, without duplicate items.
    - expect: The end-of-content state is indicated and further scrolling does not corrupt the list.
  2. Activate Start on Dynamic Button and observe its timed/state transition; activate START when it becomes available.
    - expect: The dynamic button changes state only as specified and can be activated when enabled.
    - expect: Attempts to activate while disabled do not trigger its action.
    - expect: The transition completes within a reasonable bounded wait and does not produce duplicate outcomes.

### 6. Browser Contexts, Tabs, Windows, and Frames

**Seed:** `tests/seed.spec.ts`

#### 6.1. Open documentation and close tabs/windows

**File:** `specs/practice-playground/browser-contexts.spec.ts`

**Steps:**
  1. Open Playwright Docs and Open Mobilewright Window, inspect each opened page, then use Close Last and Close All.
    - expect: Links/buttons open the expected destination in the expected tab or window.
    - expect: The original practice page remains available.
    - expect: Close Last closes only the most recently opened page; Close All closes all spawned pages without closing the original page.
  2. Open one random tab, one random window, three tabs at once, and three windows at once; inspect the page list and use the close controls.
    - expect: The expected number and type of pages open and each has a usable destination.
    - expect: Multiple simultaneous pages are all discoverable and can be closed without affecting unrelated pages.

#### 6.2. Browser context handling and login popup communication

**File:** `specs/practice-playground/popup-login.spec.ts`

**Steps:**
  1. Open Login Window, complete a valid login flow, and observe the parent page; repeat with invalid credentials and popup cancellation/closure.
    - expect: A successful child-window login communicates the expected result back to the opener.
    - expect: Invalid credentials show an error and do not report success to the parent.
    - expect: Closing the popup without completing login is handled without hanging the parent page.

#### 6.3. Count frames and read embedded content

**File:** `specs/practice-playground/frames.spec.ts`

**Steps:**
  1. Inspect Frame Counting and the basic/advanced frame exercises, identify frame boundaries, and read representative content inside and outside the frames.
    - expect: Frame count matches the rendered frames, including dynamically created frames only after they appear.
    - expect: Content is read from the correct frame and parent page without confusing duplicate text.
    - expect: Missing or cross-origin frames are handled explicitly without false successful assertions.

#### 6.4. Complete the payment gateway iframe flow

**File:** `specs/practice-playground/payment-frame.spec.ts`

**Steps:**
  1. Enter valid payment details in the payment gateway frame and submit; repeat with missing and malformed values.
    - expect: Valid checkout fields accept input and produce the expected result outside or inside the frame.
    - expect: Input masks/formatting behave consistently for card number, expiry, and security code.
    - expect: Invalid or incomplete payment values are rejected with clear validation and no success confirmation.

#### 6.5. Load and submit nested complaint form

**File:** `specs/practice-playground/nested-frame.spec.ts`

**Steps:**
  1. Activate Load Complaint Form, wait for the nested frame/form to appear, submit valid complaint details, then test required fields blank.
    - expect: The frame appears only after the triggering action and the form can be addressed at the correct nested frame level.
    - expect: Valid submission produces a confirmation.
    - expect: Missing required complaint fields prevent submission and show validation; frame absence or load failure is not mistaken for a pass.

### 7. Calendars and Date Pickers

**Seed:** `tests/seed.spec.ts`

#### 7.1. Native HTML5 date input

**File:** `specs/practice-playground/native-date.spec.ts`

**Steps:**
  1. Enter a valid date using the native date control, then attempt empty, malformed, and boundary dates.
    - expect: A valid date is represented in the control’s expected format.
    - expect: Invalid calendar dates cannot be submitted; required-date behavior is enforced where applicable.
    - expect: Date limits such as past/future boundaries are respected if defined by the control.

#### 7.2. Navigate jQuery UI datepicker

**File:** `specs/practice-playground/jquery-datepicker.spec.ts`

**Steps:**
  1. Open the datepicker, navigate months forward and backward, select a date, then use Today and Clear.
    - expect: Month navigation updates the displayed calendar correctly across month/year boundaries.
    - expect: Selecting a valid date populates the field.
    - expect: Today selects the current date and Clear removes the value.
    - expect: Readonly fields cannot be changed by typing if marked readonly.

#### 7.3. Dropdown datepicker and boundary rules

**File:** `specs/practice-playground/dropdown-datepicker.spec.ts`

**Steps:**
  1. Use the month/year dropdowns to jump to a distant date, select a day, and clear the selection.
    - expect: Month and year controls select the intended calendar period and update available days.
    - expect: The chosen date is reflected accurately, including leap-year February.
    - expect: Clear returns the control to its empty state.
  2. Try disabled/unavailable dates and navigation at supported min/max years.
    - expect: Unavailable dates cannot be selected.
    - expect: Calendar navigation respects supported boundaries and does not create invalid dates.

#### 7.4. Multi-calendar and dual-calendar ranges

**File:** `specs/practice-playground/multi-dual-calendar.spec.ts`

**Steps:**
  1. Select dates using the Multi-Calendar and Dual Calendar widgets, including a range spanning a month boundary.
    - expect: Selection applies to the intended calendar panel even when day numbers repeat.
    - expect: Dual-calendar start/end dates form a valid ordered range and appear in the associated fields.
  2. Try end date before start date, same-day stay if disallowed, missing one endpoint, and changing the start after choosing an end.
    - expect: Invalid ranges are rejected or corrected with clear feedback.
    - expect: Changing one endpoint keeps the other endpoint valid or resets it as required.
    - expect: No invalid range is displayed as a successful selection.

#### 7.5. Enterprise date inputs

**File:** `specs/practice-playground/enterprise-dates.spec.ts`

**Steps:**
  1. Inspect readonly/populated enterprise date fields, use each supported calendar entry route including the calendar icon, and select a valid value.
    - expect: Readonly values are not overwritten through direct typing where prohibited.
    - expect: Both supported entry routes lead to the intended field and selected date.
    - expect: The selected value is formatted and retained consistently.

### 8. Advanced UI Elements and linked labs

**Seed:** `tests/seed.spec.ts`

#### 8.1. Interactive SVG bar and pie charts

**File:** `specs/practice-playground/svg-charts.spec.ts`

**Steps:**
  1. Inspect chart labels/data, hover and click representative SVG bars and pie slices, and move between data points.
    - expect: Chart elements are rendered with accessible or otherwise identifiable labels/data.
    - expect: Hover feedback corresponds to the targeted SVG element and updates/clears correctly.
    - expect: Clicking an interactive chart element updates only its associated selection/result.

#### 8.2. Interactive seat booking map

**File:** `specs/practice-playground/seat-map.spec.ts`

**Steps:**
  1. Select several available seats, deselect one, and attempt to select a reserved/unavailable seat.
    - expect: Available seats toggle selection and selected-seat summary/pricing updates correctly.
    - expect: Reserved seats cannot be selected.
    - expect: Deselecting a seat updates the summary and total without affecting other chosen seats.
  2. Exercise zero-seat and maximum-seat boundary rules if a booking limit is shown.
    - expect: Zero selections do not produce a booking confirmation.
    - expect: Selection limits are enforced with visible feedback and totals remain accurate.

#### 8.3. Interactive SVG world map

**File:** `specs/practice-playground/world-map.spec.ts`

**Steps:**
  1. Hover and select multiple map regions, including an unrecognized/non-interactive region if present.
    - expect: Region hover/selection feedback corresponds to the intended region.
    - expect: Selecting a region updates its details without leaving stale details from the previous region.
    - expect: Non-interactive regions do not produce a false selection.

#### 8.4. Open related labs and external destinations

**File:** `specs/practice-playground/lab-links.spec.ts`

**Steps:**
  1. Open representative linked labs/apps from Labs & Real-World Automation, including a same-site lab and a destination opened in a new tab.
    - expect: Each link navigates to its advertised same-site destination or opens the expected new page.
    - expect: The destination loads the expected page identity and the original page is preserved for new-tab links.
    - expect: Broken, blocked, or unavailable destinations are detected rather than treated as successful navigation.
  2. Use breadcrumbs or browser Back to return to Practice Playground after visiting a same-tab lab.
    - expect: Navigation returns to /practice.html and the target section can be reached again.
