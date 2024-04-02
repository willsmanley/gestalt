// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Elevation Accessibility check', async ({ page }) => {
  await page.goto('/foundations/elevation');
  await expectAccessiblePage({ page });
});
