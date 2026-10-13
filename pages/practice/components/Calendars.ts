import type { Locator, Page } from '@playwright/test';

export class Calendars {
  constructor(private readonly page: Page) {}

  get clear(): Locator {
    return this.page.getByTestId('dp-arrow-clear');
  }

  get clearSelectionButton(): Locator {
    return this.page.getByRole('button', { name: 'Clear selection', exact: true });
  }

  get dropdownBasedDatepickerHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Dropdown-Based Datepicker' });
  }

  get dualCalendarHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Dual Calendar' });
  }

  get enterpriseDateInputsHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Enterprise Date Inputs' });
  }

  get input(): Locator {
    return this.page.getByTestId('dp-arrow-input');
  }

  get jqueryUIDatepickerHeading(): Locator {
    return this.page.getByRole('heading', { name: 'jQuery UI Datepicker' });
  }

  get multiCalendarHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Multi-Calendar' });
  }

  get nativeDates(): Locator {
    return this.page.locator('input[type="date"]');
  }

  get next(): Locator {
    return this.page.getByTestId('dp-arrow-next');
  }

  get sections(): Locator {
    return this.page.locator('section');
  }

  get selects(): Locator {
    return this.page.locator('select');
  }

  get today(): Locator {
    return this.page.getByTestId('dp-arrow-today');
  }
  get enterpriseSection(): Locator {
    return this.sections.filter({ has: this.enterpriseDateInputsHeading }).first();
  }
  get enterpriseInputs(): Locator { return this.enterpriseSection.locator('input'); }
}
