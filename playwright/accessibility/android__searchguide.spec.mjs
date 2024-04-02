// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android SearchGuide Accessibility check', async ({ page }) => {
  await page.goto('/android/searchguide');
  await expectAccessiblePage({ page });
});
