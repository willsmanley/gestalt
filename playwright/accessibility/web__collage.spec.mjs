// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Collage Accessibility check', async ({ page }) => {
  await page.goto('/web/collage');
  await expectAccessiblePage({ page });
});
