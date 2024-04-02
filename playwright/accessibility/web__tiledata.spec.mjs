// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('TileData accessibility check', async ({ page }) => {
  await page.goto('/web/tiledata');
  await expectAccessiblePage({ page });
});
