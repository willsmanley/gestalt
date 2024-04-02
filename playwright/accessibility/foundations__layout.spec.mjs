// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Layouts Accessibility check', async ({ page }) => {
  await page.goto('/foundations/layout');
  await expectAccessiblePage({ page });
});
