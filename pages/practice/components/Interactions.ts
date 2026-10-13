import type { Locator, Page } from '@playwright/test';

export class Interactions {
  constructor(private readonly page: Page) {}

  get confirmAlert(): Locator {
    return this.page.getByTestId('btn-confirm-alert');
  }

  get openInfiniteScroll(): Locator {
    return this.page.getByTestId('btn-open-infinite-scroll');
  }

  get promptAlert(): Locator {
    return this.page.getByTestId('btn-prompt-alert');
  }

  get rightClickMeButton(): Locator {
    return this.page.getByRole('button', { name: 'Right Click Me', exact: true });
  }

  get simpleAlert(): Locator {
    return this.page.getByTestId('btn-simple-alert');
  }

  get startButton(): Locator {
    return this.page.getByRole('button', { name: 'Start', exact: true });
  }

  get startedButton(): Locator {
    return this.page.getByRole('button', { name: 'START', exact: true });
  }

  get typeCharacterByCharacter(): Locator {
    return this.page.getByPlaceholder('Type character by character…');
  }
}
