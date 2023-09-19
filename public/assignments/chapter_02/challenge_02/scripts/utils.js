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
 * @returns {string} Formatted currency
 */
function formatCurrency(value) {
  return formatter.format(value);
}

/**
 * Check if two dates are the same
 *
 * @param {Date} inputDate
 * @param {Date} targetDate
 * @param {string} targetTime
 * @returns {boolean} Is same between two dates
 */
function isSameBetweenTwoDates(inputDate, targetDate, targetTime) {
  const firstDateString = inputDate.toISOString().slice(0, 10);
  const secondDateString = targetDate.toISOString().slice(0, 10);

  if (firstDateString > secondDateString) return false;

  const secondDateTime = targetDate.toISOString().slice(11, 16);

  const isWithinTargetTime = targetTime <= secondDateTime;

  return isWithinTargetTime;
}
