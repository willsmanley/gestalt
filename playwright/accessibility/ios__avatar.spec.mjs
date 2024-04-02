// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Avatar Accessibility check', async ({ page }) => {
  await page.goto('/ios/avatar');
  await expectAccessiblePage({ page });
});
