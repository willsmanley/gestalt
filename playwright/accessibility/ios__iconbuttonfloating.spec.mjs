// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS IconButtonFloating Accessibility check', async ({ page }) => {
  await page.goto('/ios/iconbuttonfloating');
  await expectAccessiblePage({ page });
});
