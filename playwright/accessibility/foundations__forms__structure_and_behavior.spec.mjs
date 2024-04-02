// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Structure and behavior Accessibility check', async ({ page }) => {
  await page.goto('/foundations/forms/structure_and_behavior');
  await expectAccessiblePage({ page });
});
