import type { Locator, Page } from '@playwright/test';

export class FormControls {
  constructor(private readonly page: Page) {}

  get addressInput(): Locator {
    return this.page.getByLabel('Address', { exact: true });
  }

  get autoSave(): Locator {
    return this.page.getByLabel('Auto Save', { exact: true });
  }

  get checkbox2(): Locator {
    return this.page.getByLabel('Checkbox 2', { exact: true });
  }

  get clothingBrands(): Locator {
    return this.page.getByLabel('Clothing brands', { exact: true });
  }

  get deliveryEstimateButton(): Locator {
    return this.page.getByRole('button', { name: 'Delivery estimate' });
  }

  get deliveryEstimateText(): Locator {
    return this.page.getByText(/delivery estimate/i);
  }

  get emailAlerts(): Locator {
    return this.page.getByLabel('Email Alerts', { exact: true });
  }

  get emailInput(): Locator {
    return this.page.getByLabel('Email', { exact: true });
  }

  get enableNotifications(): Locator {
    return this.page.getByLabel('Enable Notifications', { exact: true });
  }

  get female(): Locator {
    return this.page.getByLabel('Female', { exact: true });
  }

  get formControlsHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Form Controls' });
  }

  get hiddenElementsAJAXHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Hidden Elements & AJAX' });
  }

  get hideElementButton(): Locator {
    return this.page.getByRole('button', { name: 'Hide Element' });
  }

  get inputBox2(): Locator {
    return this.page.getByLabel('Input Box 2', { exact: true });
  }

  get loadAJAXContentButton(): Locator {
    return this.page.getByRole('button', { name: 'Load AJAX Content' });
  }

  get male(): Locator {
    return this.page.getByLabel('Male', { exact: true });
  }

  get monday(): Locator {
    return this.page.getByLabel('Monday', { exact: true });
  }

  get nameInput(): Locator {
    return this.page.getByLabel('Name', { exact: true });
  }

  get primary(): Locator {
    return this.page.getByRole('navigation', { name: 'Primary' });
  }

  get resetButton(): Locator {
    return this.page.getByRole('button', { name: 'Reset', exact: true });
  }

  get selectAllDays(): Locator {
    return this.page.getByRole('checkbox', { name: 'Select all days' });
  }

  get showElementButton(): Locator {
    return this.page.getByRole('button', { name: 'Show Element' });
  }

  get submitButton(): Locator {
    return this.page.getByRole('button', { name: 'Submit', exact: true });
  }

  get sunday(): Locator {
    return this.page.getByLabel('Sunday', { exact: true });
  }

  get targetField(): Locator {
    return this.page.getByLabel('Target field', { exact: true });
  }

  get textInputsHeading(): Locator {
    return this.page.getByRole('heading', { name: 'Text Inputs' });
  }

  get toggleCheckbox2Button(): Locator {
    return this.page.getByRole('button', { name: 'Toggle Checkbox 2' });
  }

  get toggleInputBox2Button(): Locator {
    return this.page.getByRole('button', { name: 'Toggle Input Box 2' });
  }

  dayCheckbox(day: string): Locator {
    return this.page.getByLabel(day, { exact: true });
  }

  async hideTargetField() { await this.hideElementButton.click(); }
  async showTargetField() { await this.showElementButton.click(); }
  async toggleSecondInput() { await this.toggleInputBox2Button.click(); }
  async toggleSecondCheckbox() { await this.toggleCheckbox2Button.click(); }
  async loadAjaxContent() { await this.loadAJAXContentButton.click(); }

  async fillContactDetails(name: string, email: string, address: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.addressInput.fill(address);
  }

  async submitContactForm() { await this.submitButton.first().click(); }
  async resetContactForm() { await this.resetButton.first().click(); }
  get homeLink(): Locator { return this.primary.getByRole('link', { name: 'Home' }); }
}
