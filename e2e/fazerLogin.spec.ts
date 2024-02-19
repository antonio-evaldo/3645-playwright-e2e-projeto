import test, { expect } from "@playwright/test";

test.describe('Login', () => {
  test('Deve conseguir fazer login com email e senha válidos', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('botao-login').click();
  });
});
