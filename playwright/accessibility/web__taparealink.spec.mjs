// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Web TapAreaLink Accessibility check', async ({ page }) => {
  await page.goto('/web/taparealink');
  await expectAccessiblePage({ page });
});
