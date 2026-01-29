import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  usernameInput: Locator;
  passwordInput: Locator;
  loginButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.locator('button[id="login-button"]');
    this.errorMessage = page.locator('div.alert.alert-danger');
  }

  async login(username: string, password: string) {
    await this.navigateTo('https://suite8demo.suiteondemand.com/');
    await this.waitForPageLoad();
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.waitForPageLoad();
  }

  async validateErrorMessage() {
    await expect(this.errorMessage).toBeVisible();
  }
}