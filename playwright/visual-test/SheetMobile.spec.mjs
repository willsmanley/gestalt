// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('SheetMobile light mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/SheetMobile-light');
  const locator = page.getByRole('dialog');

  await expect(locator).toHaveScreenshot('SheetMobile-light.png');
});
