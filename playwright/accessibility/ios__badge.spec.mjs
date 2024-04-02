// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Badge Page Accessibility check', async ({ page }) => {
  await page.goto('/ios/badge');
  await expectAccessiblePage({ page });
});
