// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Installation Accessibility check', async ({ page }) => {
  await page.goto('/get_started/developers/installation');
  await expectAccessiblePage({ page });
});
