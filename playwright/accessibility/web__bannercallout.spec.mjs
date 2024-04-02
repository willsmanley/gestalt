// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('BannerCallout Accessibility check', async ({ page }) => {
  await page.goto('/web/bannercallout');
  await expectAccessiblePage({ page });
});
