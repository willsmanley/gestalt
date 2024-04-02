// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Text Accessibility check', async ({ page }) => {
  await page.goto('/android/text');
  await expectAccessiblePage({ page });
});
