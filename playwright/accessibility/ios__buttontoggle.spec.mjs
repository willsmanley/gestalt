// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS ButtonToggle Page Accessibility check', async ({ page }) => {
  await page.goto('/ios/buttontoggle');
  await expectAccessiblePage({ page });
});
