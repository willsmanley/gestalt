// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android Switch Accessibility check', async ({ page }) => {
  await page.goto('/android/switch');
  await expectAccessiblePage({ page });
});
