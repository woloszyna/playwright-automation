import type { Locator, Page } from '@playwright/test';

export class Dropdowns {
  constructor(private readonly page: Page) {}

  get autosuggestResults(): Locator {
    return this.page.getByTestId('autosuggest-results');
  }

  get bootstrapDropdownHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Bootstrap Dropdown' });
  }

  get bootstrapDropdownMenu(): Locator {
    return this.page.getByTestId('bootstrap-dropdown-menu');
  }

  get bootstrapSelectedValue(): Locator {
    return this.page.getByTestId('bootstrap-selected-value');
  }

  get city(): Locator {
    return this.page.getByLabel('City', { exact: true });
  }

  get country(): Locator {
    return this.page.getByLabel('Country', { exact: true });
  }

  get playwrightSkillMatches(): Locator {
    return this.page.getByText(/playwright/i);
  }

  get searchForProducts(): Locator {
    return this.page.getByPlaceholder('Search for Products');
  }

  get sectionBootstrapDropdown(): Locator {
    return this.page.locator('#section-bootstrap-dropdown');
  }

  get selectCountry(): Locator {
    return this.page.getByLabel('Select Country', { exact: true });
  }

  get sortedAnimals(): Locator {
    return this.page.getByLabel('Sorted Animals', { exact: true });
  }

  get state(): Locator {
    return this.page.getByLabel('State', { exact: true });
  }

  get typeToSearchSkills(): Locator {
    return this.page.getByPlaceholder('Type to search skills…');
  }
  get stateOptions(): Locator { return this.state.locator('option'); }
  get animalOptions(): Locator { return this.sortedAnimals.locator('option'); }
  get bootstrapTrigger(): Locator { return this.sectionBootstrapDropdown.getByText('-- Select --', { exact: true }); }
  bootstrapOption(name: string): Locator {
    return this.sectionBootstrapDropdown.getByRole('option', { name, exact: true });
  }
}
