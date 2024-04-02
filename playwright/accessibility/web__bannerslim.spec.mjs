// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('BannerSlim Accessibility check', async ({ page }) => {
  await page.goto('/web/bannerslim');
  await expectAccessiblePage({ page });
});
