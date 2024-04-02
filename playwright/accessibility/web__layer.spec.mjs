// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Layer Accessibility check', async ({ page }) => {
  await page.goto('/web/layer');
  await expectAccessiblePage({ page });
});
