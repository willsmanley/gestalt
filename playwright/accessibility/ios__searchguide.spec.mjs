// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS SearchGuide Accessibility check', async ({ page }) => {
  await page.goto('/ios/searchguide');
  await expectAccessiblePage({ page });
});
