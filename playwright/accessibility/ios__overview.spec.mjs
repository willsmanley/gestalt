// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Overview iOS component page check', async ({ page }) => {
  await page.goto('/ios/overview');
  await expectAccessiblePage({ page });
});
