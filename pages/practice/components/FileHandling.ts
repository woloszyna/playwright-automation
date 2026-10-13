import type { Locator, Page } from '@playwright/test';

export class FileHandling {
  constructor(private readonly page: Page) {}

  get downloadPDFLink(): Locator {
    return this.page.getByRole('link', { name: 'Download PDF', exact: true });
  }

  get openExcelPlayground(): Locator {
    return this.page.getByTestId('btn-open-excel-playground');
  }

  get resetHidden(): Locator {
    return this.page.getByTestId('btn-reset-hidden');
  }

  get resetMultiple(): Locator {
    return this.page.getByTestId('btn-reset-multiple');
  }

  get resetSingle(): Locator {
    return this.page.getByTestId('btn-reset-single');
  }

  get uploadChallengesHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Upload Challenges' });
  }

  get uploadHidden(): Locator {
    return this.page.locator('#upload-hidden');
  }

  get uploadMultiple(): Locator {
    return this.page.locator('#upload-multiple');
  }

  get uploadSingle(): Locator {
    return this.page.locator('#upload-single');
  }
}
