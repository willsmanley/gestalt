// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Animation principles check', async ({ page }) => {
  await page.goto('/foundations/animation/principles');
  await expectAccessiblePage({ page });
});
