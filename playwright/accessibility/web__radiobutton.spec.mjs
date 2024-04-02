// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('RadioButton Accessibility check', async ({ page }) => {
  await page.goto('/web/radiobutton');
  await expectAccessiblePage({ page });
});
