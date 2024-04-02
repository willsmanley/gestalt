// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android component status check', async ({ page }) => {
  await page.goto('/android/component_status');
  await expectAccessiblePage({ page });
});
