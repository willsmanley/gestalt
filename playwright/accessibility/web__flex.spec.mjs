// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Flex Accessibility check', async ({ page }) => {
  await page.goto('/web/flex');
  await expectAccessiblePage({ page });
});
