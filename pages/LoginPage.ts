import type { Page } from '@playwright/test';

export class LoginPage {
  constructor(readonly page: Page) {}

  get loginButton() {
    return this.page.getByRole('button', { name: 'Login', exact: true });
  }

  async loginButtonBackgroundColor(): Promise<string> {
    return this.loginButton.evaluate((button) => {
      const color = getComputedStyle(button).backgroundColor;
      const rgb = color.match(/\d+/g);
      return rgb
        ? `#${rgb.slice(0, 3)
          .map(channel => Number(channel).toString(16).padStart(2, '0'))
          .join('')}`
        : color;
    });
  }
}
