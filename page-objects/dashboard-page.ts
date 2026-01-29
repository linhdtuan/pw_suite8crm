import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class DashboardPage extends BasePage {
  readonly dashboardButton: Locator;
  readonly suiteButton: Locator;
  readonly xButton: Locator;


  constructor(page: Page) {
    super(page);
    this.dashboardButton = page.locator('a[type= "button"]').nth(1);
    this.suiteButton = page.locator('li[role = "presentation"]').nth(1);
    this.xButton = page.locator('span[class = "suitepicon suitepicon-action-clear"]')
    const subjectLink = this.page.locator('td a', {hasText: 'Left a message',});

  }
  async validateSuccessfulLogin() {
    await expect(this.dashboardButton).toBeVisible();
  }

  async verifyMyCallDatas() {
    await expect(this.page.getByRole('generic', {name: 'My Calls'})).toBeVisible();
    await expect(this.page.getByText("Close")).toBeVisible();
    await expect(this.page.getByText("Related to")).toBeVisible();
    await expect(this.page.getByText("Start Date")).toBeVisible();
    await expect(this.page.getByRole('link', {name: 'Subject'})).toBeVisible();
    await expect(this.xButton).toBeVisible();
    const subjectLink = this.page.locator('td a', {hasText: 'Left a message',});
    await expect(this.page.getByRole('link', {name: 'Get more information on the proposed deal'})).toBeVisible();await expect(subjectLink).toBeVisible();
  }
}

