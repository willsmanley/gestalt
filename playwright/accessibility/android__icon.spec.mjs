// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Icon Accessibility check', async ({ page }) => {
  await page.goto('/Android/icon');
  await expectAccessiblePage({ page });
});
