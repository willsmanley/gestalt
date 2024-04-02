// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('SideNavigation dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/SideNavigation-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('SideNavigation-dark.png');
});
