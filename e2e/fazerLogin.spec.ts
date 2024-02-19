import test, { expect } from "@playwright/test";

test.describe('Login', () => {
  test('Deve conseguir fazer login com email e senha válidos', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('botao-login').click();
    await expect(page).toHaveURL('/auth/login');
    
    await page.getByTestId('input-email').fill('antonio.evaldo@alura.com');
    await page.getByTestId('input-senha').fill('123456');
    await page.getByTestId('botao-acessar-conta').click();
    await expect(page).toHaveURL('/home');
  });
});
