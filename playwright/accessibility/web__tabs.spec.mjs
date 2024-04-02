// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Tabs Accessibility check', async ({ page }) => {
  await page.goto('/web/tabs');
  await expectAccessiblePage({
    page,
    rules: {
      'duplicate-id-aria': { enabled: false },
    },
  });
});
