// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('ESLint Plugin Accessibility check', async ({ page }) => {
  await page.goto('/get_started/developers/eslint_plugin');
  await expectAccessiblePage({ page });
});
