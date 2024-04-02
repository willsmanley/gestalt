// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Image Accessibility check', async ({ page }) => {
  await page.goto('/web/image');
  await expectAccessiblePage({ page });
});
