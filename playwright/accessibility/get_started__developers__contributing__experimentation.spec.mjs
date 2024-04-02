// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Experimentation Accessibility check', async ({ page }) => {
  await page.goto('/get_started/developers/contributing/experimentation');
  await expectAccessiblePage({
    page,
    rules: {
      'color-contrast': { enabled: false },
    },
  });
});
