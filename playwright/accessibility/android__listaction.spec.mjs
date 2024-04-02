// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android ListAction Accessibility check', async ({ page }) => {
  await page.goto('/android/listaction');
  await expectAccessiblePage({ page });
});
