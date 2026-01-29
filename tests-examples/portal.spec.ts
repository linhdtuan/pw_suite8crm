import { test, expect, Page } from '@playwright/test';

/**
 * Login to MSB portal
 * @param page Playwright page object
 * @param username Username/email for login
 * @param password Password for login
 */
export async function loginToMSBPortal(page: Page, username: string, password: string) {
  // Navigate to the MSB portal login page
  await page.goto('https://iportal-dev.msb.com.vn/login');
  
  // Wait for the login form to be visible
  await page.waitForSelector('form', { state: 'visible' });
  
  // Fill in credentials
  // Note: You'll need to inspect the page to get the correct selectors
  // These are common selectors, but might need adjustment
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  
  // Click login button
  await page.click('button[type="submit"]');
  
  // Wait for navigation after login
  await page.waitForNavigation();
  
  // Verify login was successful - adjust selector based on your portal's UI
  await expect(page.locator('.user-profile, .dashboard, .welcome-message')).toBeVisible();
}

// Example test using the login function
test('login to MSB portal', async ({ page }) => {
  await loginToMSBPortal(page, 'admin@gmail.com', 'anhtuan');
  
  // Add your test steps after login here
  // For example:
  // await expect(page.locator('.dashboard-title')).toHaveText('Welcome to MSB Portal');
});