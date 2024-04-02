// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Accessibility page Accessibility check', async ({ page }) => {
  await page.goto('/foundations/accessibility');
  await expectAccessiblePage({ page });
});
