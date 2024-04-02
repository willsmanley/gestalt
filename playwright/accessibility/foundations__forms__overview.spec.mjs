// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Forms overview Accessibility check', async ({ page }) => {
  await page.goto('/foundations/forms/overview');
  await expectAccessiblePage({ page });
});
