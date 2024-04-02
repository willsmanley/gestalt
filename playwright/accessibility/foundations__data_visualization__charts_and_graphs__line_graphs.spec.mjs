// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Data Viz Color Palette Accessibility check', async ({ page }) => {
  await page.goto(
    '/foundations/data_visualization/charts_and_graphs/line_graphs'
  );
  await expectAccessiblePage({ page });
});
