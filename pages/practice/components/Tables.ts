import type { Locator, Page } from '@playwright/test';

export class Tables {
  constructor(private readonly page: Page) {}

  get allTables(): Locator {
    return this.page.getByRole('table');
  }

  get regenerateButton(): Locator {
    return this.page.getByRole('button', { name: /Regenerate/ });
  }

  get departure(): Locator {
    return this.page.getByLabel('Departure', { exact: true });
  }

  get destination(): Locator {
    return this.page.getByLabel('Destination', { exact: true });
  }

  get dynamicTableHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Dynamic Table' });
  }

  get paginationSearch(): Locator {
    return this.page.getByTestId('pagination-search');
  }

  get paginationTableHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Pagination Table' });
  }

  get rowsPerPage(): Locator {
    return this.page.getByLabel('Rows per page', { exact: true });
  }

  get staticWebTableHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Static Web Table' });
  }

  get tableAssignmentFlightBookingPortalHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Table Assignment — Flight Booking Portal' });
  }
  get staticRows(): Locator { return this.allTables.first().getByRole('row'); }
  get dynamicRows(): Locator { return this.allTables.nth(1).getByRole('row'); }
  async regenerate() { await this.regenerateButton.click(); }
}
