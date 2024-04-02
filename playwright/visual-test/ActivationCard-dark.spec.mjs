// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('ActivationCard dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/ActivationCard-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('ActivationCard-dark.png');
});
