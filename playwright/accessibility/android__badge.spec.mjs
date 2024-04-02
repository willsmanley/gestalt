// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Badge Page Accessibility check', async ({ page }) => {
  await page.goto('/android/badge');
  await expectAccessiblePage({ page });
});
