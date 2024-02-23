import test, { expect } from '@playwright/test';

test.describe('Buscar Passagens', () => {
  test('Deve buscar passagem de somente ida', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('botao-somente-ida').click();
    await page.getByTestId('botao-mudar-passageiros').click();

    // Modal
    await page
      .getByTestId('seletor-passageiro-adultos')
      .getByRole('button', { name: 'Ícone do operador de adição' })
      .click();
    await page
      .getByTestId('seletor-passageiro-criancas')
      .getByRole('button', { name: 'Ícone do operador de adição' })
      .click();
    await page
      .getByTestId('seletor-passageiro-bebes')
      .getByRole('button', { name: 'Ícone do operador de adição' })
      .click();
    await page.getByTestId('botao-modal-buscar').click();

    // Preenchendo campos
    const dropdownOrigem = page
      .getByTestId('campo-dropdown-origem')
      .getByLabel('Origem');
    await dropdownOrigem.fill('minas gerais');
    await dropdownOrigem.press('Enter');

    const dropdownDestino = page
      .getByTestId('campo-dropdown-destino')
      .getByPlaceholder('Destino');
    await dropdownDestino.fill('rio de janeiro');
    await dropdownDestino.press('Enter');

    const dataHoje = new Date().toLocaleString('en-US', { dateStyle: 'short' });
    await page.getByTestId('campo-data-ida').fill(dataHoje);

    await page.getByTestId('botao-buscar-formulario').click();

    // Asserções
    await expect(page.getByTestId('texto-ida-volta')).toHaveText('Somente ida');

    await expect(page.getByTestId('container-origem')).toContainText(
      'Minas Gerais'
    );

    await expect(page.getByTestId('container-destino')).toContainText(
      'Rio de Janeiro'
    );

    await expect(page.getByTestId('botao-comprar')).toBeVisible();
  });
});
