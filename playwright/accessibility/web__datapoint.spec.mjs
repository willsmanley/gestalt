// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Datapoint Accessibility check', async ({ page }) => {
  await page.goto('/web/datapoint');
  await expectAccessiblePage({ page });
});
