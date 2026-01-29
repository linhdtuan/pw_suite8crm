import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login-page.ts';
import { DashboardPage } from '../page-objects/dashboard-page.ts';

test('login to Suite8 Demo', async ({ page }) => {
  test.setTimeout(120 * 1000);
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.login('will', 'will');
  await dashboardPage.validateSuccessfulLogin();
});

test('login to Suite8 Demo with invalid password', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('will', 'wrongpassword');
  await loginPage.validateErrorMessage();
});

test ('login to Suite8 Demo with invalid username', async ({ page }) => {
  const loginPage = new LoginPage(page);  
  await loginPage.login('wrongusername', 'will');
  await loginPage.validateErrorMessage();
});

test('Login to Suite8 Demo with deactived user', async ({page}) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('deactiveduser', 'will');
  await loginPage.validateErrorMessage();
});

