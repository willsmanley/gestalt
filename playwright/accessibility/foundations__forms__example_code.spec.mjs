// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Available Components Accessibility check', async ({ page }) => {
  await page.goto('/foundations/forms/example_code');
  await expectAccessiblePage({ page });
});
