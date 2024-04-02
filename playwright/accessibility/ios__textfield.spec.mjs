// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS TextField Accessibility check', async ({ page }) => {
  await page.goto('/ios/textfield');
  await expectAccessiblePage({ page });
});
