// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Text Accessibility check', async ({ page }) => {
  await page.goto('/ios/text');
  await expectAccessiblePage({ page });
});
