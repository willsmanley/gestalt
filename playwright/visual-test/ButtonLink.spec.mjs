// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('ButtonLink visual regression check', async ({ page }) => {
  await page.goto('/visual-test/ButtonLink');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('ButtonLink.png');
});
