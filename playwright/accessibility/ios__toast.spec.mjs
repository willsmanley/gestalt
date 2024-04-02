// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Toast Accessibility check', async ({ page }) => {
  await page.goto('/ios/toast');
  await expectAccessiblePage({ page });
});
