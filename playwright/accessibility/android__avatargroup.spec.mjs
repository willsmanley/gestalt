// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Android AvatarGroup Accessibility check', async ({ page }) => {
  await page.goto('/android/avatargroup');
  await expectAccessiblePage({ page });
});
