import type { Locator, Page } from '@playwright/test';

export class WindowsAndFrames {
  constructor(private readonly page: Page) {}

  get frameCountingHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Frame Counting' });
  }

  get frameSupport(): Locator {
    return this.page.locator('#frame-support');
  }

  get iframes(): Locator {
    return this.page.locator('iframe');
  }

  get loadSupport(): Locator {
    return this.page.getByTestId('btn-load-support');
  }

  get openLoginWindow(): Locator {
    return this.page.getByTestId('btn-open-login-window');
  }

  get openLoginWindowButton(): Locator {
    return this.page.getByRole('button', { name: 'Open Login Window' });
  }

  get openMobilewrightWindowButton(): Locator {
    return this.page.getByRole('button', { name: 'Open Mobilewright Window' });
  }

  get openOneRandomWindowButton(): Locator {
    return this.page.getByRole('button', { name: 'Open One Random Window' });
  }

  get openPlaywrightDocsButton(): Locator {
    return this.page.getByRole('button', { name: 'Open Playwright Docs' });
  }

  get openThreeTabsAtOnceButton(): Locator {
    return this.page.getByRole('button', { name: 'Open Three Tabs at Once' });
  }

  get paymentGatewayFrameHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Payment Gateway Frame' });
  }
}
