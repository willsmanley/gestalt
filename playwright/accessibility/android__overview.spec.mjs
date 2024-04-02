// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Overview Android component page check', async ({ page }) => {
  await page.goto('/android/overview');
  await expectAccessiblePage({ page });
});
