// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Avatar Accessibility check', async ({ page }) => {
  await page.goto('/android/avatar');
  await expectAccessiblePage({ page });
});
