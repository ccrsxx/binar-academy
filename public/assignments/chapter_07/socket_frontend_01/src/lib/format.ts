const NUMBER_FORMATTER = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
});

export function formatCurrency(value: number): string {
  return NUMBER_FORMATTER.format(value);
}
