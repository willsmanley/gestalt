// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS IconButton Accessibility check', async ({ page }) => {
  await page.goto('/ios/iconbutton');
  await expectAccessiblePage({ page });
});
