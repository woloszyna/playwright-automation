import type { Locator, Page } from '@playwright/test';

export class AdvancedElements {
  constructor(private readonly page: Page) {}

  get charts(): Locator {
    return this.page.locator('svg');
  }

  get interactiveSVGBarChartHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Interactive SVG Bar Chart' });
  }

  get interactiveSVGPieChartHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Interactive SVG Pie Chart' });
  }

  get interactiveSVGWorldMapHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Interactive SVG World Map' });
  }

  get interactiveSeatBookingMapHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Interactive Seat Booking Map' });
  }

  get openAuthStateLab(): Locator {
    return this.page.getByTestId('btn-open-auth-state-lab');
  }

  get sections(): Locator {
    return this.page.locator('section');
  }
  get seatMapSection(): Locator {
    return this.sections.filter({ has: this.interactiveSeatBookingMapHeading }).first();
  }
  get seatMapControls(): Locator { return this.seatMapSection.locator('svg,button,[role="button"]'); }
  get worldMapSection(): Locator {
    return this.sections.filter({ has: this.interactiveSVGWorldMapHeading }).first();
  }
  get worldMapGraphic(): Locator { return this.worldMapSection.locator('svg'); }
}
