import test from '@playwright/test';

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
    await dropdownOrigem.fill('rio de janeiro');
    await dropdownOrigem.press('Enter');

    const dropdownDestino = page
      .getByTestId('campo-dropdown-destino')
      .getByPlaceholder('Destino');
    await dropdownDestino.fill('são paulo');
    await dropdownDestino.press('Enter');

    const dataHoje = new Date().toLocaleString('en-US', { dateStyle: 'short' });
    await page.getByTestId('campo-data-ida').fill(dataHoje);

    await page.getByTestId('botao-buscar-formulario').click();
  });
});
