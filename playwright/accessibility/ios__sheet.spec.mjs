// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Sheet Page Accessibility check', async ({ page }) => {
  await page.goto('/ios/sheet');
  await expectAccessiblePage({ page });
});
