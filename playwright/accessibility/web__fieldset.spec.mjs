// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Fieldset Accessibility check', async ({ page }) => {
  await page.goto('/web/fieldset');
  await expectAccessiblePage({ page });
});
