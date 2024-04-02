// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS TextArea Accessibility check', async ({ page }) => {
  await page.goto('/ios/textarea');
  await expectAccessiblePage({ page });
});
