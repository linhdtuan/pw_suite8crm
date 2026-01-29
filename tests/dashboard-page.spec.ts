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

test('Veriy my call', async ({ page }) => {
  test.setTimeout(120 * 10000);
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  await loginPage.login('will', 'will');
  await dashboardPage.validateSuccessfulLogin();
  await dashboardPage.verifyMyCallDatas();
});