// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Toast Accessibility check', async ({ page }) => {
  await page.goto('/android/toast');
  await expectAccessiblePage({ page });
});
