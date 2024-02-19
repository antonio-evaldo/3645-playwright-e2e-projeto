import test, { expect } from "@playwright/test";

test.describe("Página inicial", () => {
  test("Deve conter os elementos principais", async ({ page }) => {
    await page.goto("http://localhost:4200");
    await expect(page).toHaveTitle("Jornada Milhas");

    const tituloPassagens = page.getByRole('heading', { name: 'Passagens' });
    const tituloPromocoes = page.getByRole('heading', { name: 'Promoções' });
    const tituloDepoimentos = page.getByRole('heading', { name: 'Depoimentos' });
    
    await expect(tituloPassagens).toBeVisible();
    await expect(tituloPromocoes).toBeVisible();
    await expect(tituloDepoimentos).toBeVisible();
  });
});
