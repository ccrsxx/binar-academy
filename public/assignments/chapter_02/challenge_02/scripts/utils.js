/**
 * Create HTML element
 *
 * @param {TemplateStringsArray} strings
 * @param {Object[]} values
 * @returns {HTMLElement}
 */
function html(strings, ...values) {
  return String.raw({ raw: strings }, ...values);
}

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
});

/**
 * Format number currency to IDR
 *
 * @param {number} value
 * @returns {string} formatted currency
 */
function formatCurrency(value) {
  return formatter.format(value);
}
