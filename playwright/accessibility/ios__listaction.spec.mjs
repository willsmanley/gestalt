// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS ListAction Accessibility check', async ({ page }) => {
  await page.goto('/ios/listaction');
  await expectAccessiblePage({ page });
});
