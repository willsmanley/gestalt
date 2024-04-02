// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Tabs Accessibility check', async ({ page }) => {
  await page.goto('/ios/tabs');
  await expectAccessiblePage({ page });
});
