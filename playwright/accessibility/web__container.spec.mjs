// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Container Accessibility check', async ({ page }) => {
  await page.goto('/web/container');
  await expectAccessiblePage({ page });
});
