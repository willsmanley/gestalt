// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Design Accessibility check', async ({ page }) => {
  await page.goto('/get_started/designers');
  await expectAccessiblePage({ page });
});
