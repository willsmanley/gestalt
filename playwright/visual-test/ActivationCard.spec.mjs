// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('ActivationCard visual regression check', async ({ page }) => {
  await page.goto('/visual-test/ActivationCard');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('ActivationCard.png');
});
