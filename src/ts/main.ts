import { getExpenses } from './utils/fetch';

const days = document.querySelectorAll('[data-day]');

window.document.addEventListener('DOMContentLoaded', () => {
  getExpenses('src/data/data.json').then((data) => {
    for (let i = 0; i < data.length; i++) {
      const barElement = days[i];
      const barValue = days[i].firstElementChild;

      if (barElement instanceof HTMLTableCellElement) {
        barElement.style.height = data[i].amount * 5 + 'px';
        barElement.dataset.tooltipValue = '$' + data[i].amount;
      }

      if (barValue != null) {
        barValue.textContent = '$' + data[i].amount;
      }
    }
  });
});
