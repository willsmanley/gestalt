// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Checkbox Accessibility check', async ({ page }) => {
  await page.goto('/ios/checkbox');
  await expectAccessiblePage({ page });
});
