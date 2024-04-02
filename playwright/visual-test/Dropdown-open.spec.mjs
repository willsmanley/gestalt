// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Dropdown visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Dropdown-open');
  const locator = page.locator('[data-test-id="visual-test"]');
  await page.click('button');
  await expect(locator).toHaveScreenshot('Dropdown-open.png');
});
