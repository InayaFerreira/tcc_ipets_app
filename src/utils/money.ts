export function formatMoney(amount: number): string {
  return amount.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
