import type { Page } from '@playwright/test';

export class PlaywrightDocsPage {
  constructor(readonly page: Page) {}

  get getStartedLink() {
    return this.page.getByRole('link', { name: 'Get started' });
  }

  get installationHeading() {
    return this.page.getByRole('heading', { name: 'Installation' });
  }

  async goto() { await this.page.goto('https://playwright.dev/'); }
  async getStarted() { await this.getStartedLink.click(); }
}
