// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android SearchField Accessibility check', async ({ page }) => {
  await page.goto('/android/searchfield');
  await expectAccessiblePage({ page });
});
