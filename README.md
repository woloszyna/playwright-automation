# Playwright automation

The tests use the Page Object Model. Site-specific locators and reusable actions
live in `pages/`; assertions and test data live in `tests/`. The Practice
Playground page composes smaller component objects for forms, dropdowns,
calendars, tables, files, interactions, frames, and advanced elements.

Import `test` and `expect` from `fixtures/test` when adding a test. Its test-scoped
`practicePage`, `todoPage`, and `docsPage` fixtures use Playwright's isolated page
and context. Navigate explicitly with `goto()` so each test controls its setup.
For example, in `tests/practice-playground`:

```ts
import { test, expect } from '../../fixtures/test';

test('show and hide a field', async ({ practicePage }) => {
  await practicePage.goto();
  await practicePage.formControls.hideTargetField();
  await expect(practicePage.formControls.targetField).toBeHidden();
  await practicePage.formControls.showTargetField();
  await expect(practicePage.formControls.targetField).toBeVisible();
});
```

Update a selector in its page or component object rather than in each test.
Use the raw `page` and `context` fixtures for browser events and URL/title
assertions. Popup pages can have their own page objects, as shown by `LoginPage`.
Run `npm run typecheck` to check the framework and tests.

Run all tests with `npm test`, or a single test with:

```sh
npm test -- tests/practice-playground/seat-map.spec.ts --project=chromium
```

Every run using the project configuration collects Allure results, generates
`allure-report/index.html`, and opens it in your default browser, including when
tests fail. The report contains only results from that execution. Playwright's
HTML report is also retained in `playwright-report`.

Each passed or failed browser test includes a full-page screenshot in its Allure
attachments, captured at the end of the test. Screenshots are also retained in
`test-results`. A screenshot requires an open page; browser launch failures or
tests that close all their pages cannot produce one.

Allure 3 runs on Node.js; Java is not required. CI generates the report without
opening a browser. Set `ALLURE_OPEN=false` to do the same locally. Explicit
`--reporter` overrides replace the configured reporters and disable this workflow.

Use `npm run report:allure` to regenerate and reopen the latest Allure report.
Use `npm run install:browsers` to install the project's browsers.
