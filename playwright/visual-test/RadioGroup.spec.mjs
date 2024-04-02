// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('RadioGroup visual regression check', async ({ page }) => {
  await page.goto('/visual-test/RadioGroup-light');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('RadioGroup.png');
});
