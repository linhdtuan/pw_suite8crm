import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  readonly loadingIndicator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loadingIndicator = page.locator('//*[contains(@class, "sk-cube")]');
    const baseURL = 'https://suite8demo.suiteondemand.com/'
  }

  async waitForPageLoad() {
    await expect(this.loadingIndicator).toBeHidden();
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
    await this.waitForPageLoad();
  }
}