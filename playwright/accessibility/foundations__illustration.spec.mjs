// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Illustration guidelines Accessibility check', async ({ page }) => {
  await page.goto('/foundations/illustration');
  await expectAccessiblePage({ page });
});
