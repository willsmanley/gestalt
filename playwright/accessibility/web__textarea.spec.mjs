// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('TextArea Accessibility check', async ({ page }) => {
  await page.goto('/web/textarea');
  await expectAccessiblePage({ page });
});
