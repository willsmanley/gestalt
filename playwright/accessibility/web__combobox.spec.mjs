// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('ComboBox Accessibility check', async ({ page }) => {
  await page.goto('/web/combobox');
  await expectAccessiblePage({ page });
});
