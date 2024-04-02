// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android TextArea Accessibility check', async ({ page }) => {
  await page.goto('/android/textarea');
  await expectAccessiblePage({ page });
});
