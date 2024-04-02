// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS SearchField Accessibility check', async ({ page }) => {
  await page.goto('/ios/searchfield');
  await expectAccessiblePage({ page });
});
