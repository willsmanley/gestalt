// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Heading dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Heading-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Heading-dark.png');
});
