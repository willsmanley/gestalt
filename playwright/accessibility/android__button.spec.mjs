// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Button Page Accessibility check', async ({ page }) => {
  await page.goto('/android/button');
  await expectAccessiblePage({ page });
});
