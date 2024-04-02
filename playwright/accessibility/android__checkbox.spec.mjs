// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Checkbox Accessibility check', async ({ page }) => {
  await page.goto('/android/checkbox');
  await expectAccessiblePage({ page });
});
