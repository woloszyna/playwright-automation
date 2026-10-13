import type { Page } from '@playwright/test';
import { FormControls } from './components/FormControls';
import { Dropdowns } from './components/Dropdowns';
import { Calendars } from './components/Calendars';
import { Tables } from './components/Tables';
import { FileHandling } from './components/FileHandling';
import { Interactions } from './components/Interactions';
import { WindowsAndFrames } from './components/WindowsAndFrames';
import { AdvancedElements } from './components/AdvancedElements';
import { LoginPage } from '../LoginPage';

export class PracticePage {
  readonly formControls: FormControls;
  readonly dropdowns: Dropdowns;
  readonly calendars: Calendars;
  readonly tables: Tables;
  readonly files: FileHandling;
  readonly interactions: Interactions;
  readonly windowsAndFrames: WindowsAndFrames;
  readonly advanced: AdvancedElements;

  constructor(readonly page: Page) {
    this.formControls = new FormControls(page);
    this.dropdowns = new Dropdowns(page);
    this.calendars = new Calendars(page);
    this.tables = new Tables(page);
    this.files = new FileHandling(page);
    this.interactions = new Interactions(page);
    this.windowsAndFrames = new WindowsAndFrames(page);
    this.advanced = new AdvancedElements(page);
  }

  async goto() {
    await this.page.goto('https://www.playwrightautomation.com/practice.html');
  }

  async openLoginWindow(): Promise<LoginPage> {
    const [popup] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.windowsAndFrames.openLoginWindowButton.click(),
    ]);
    return new LoginPage(popup);
  }
}
