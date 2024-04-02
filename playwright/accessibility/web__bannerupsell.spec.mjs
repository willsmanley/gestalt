// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('BannerUpsell Accessibility check', async ({ page }) => {
  await page.goto('/web/bannerupsell');
  await expectAccessiblePage({ page });
});
