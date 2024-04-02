// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Text Accessibility check', async ({ page }) => {
  await page.goto('/web/text');
  await expectAccessiblePage({ page });
});
