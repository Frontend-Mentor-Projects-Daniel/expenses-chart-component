import { getExpenses } from './utils/fetch';
import { barData } from './utils/types';

const days = document.querySelectorAll(
  '[data-day]'
) as NodeListOf<HTMLTableCellElement>;

window.document.addEventListener('DOMContentLoaded', () => {
  let sum = 0;
  let greatestExpense: barData;
  let barElement: HTMLTableCellElement;
  let barValue: Element | null;
  let highestBarElement: HTMLTableCellElement;

  getExpenses<barData[]>('src/data/data.json').then((data) => {
    for (let i = 0; i < data.length; i++) {
      barElement = days[i];
      barValue = days[i].firstElementChild;

      if (days.length > 0) {
        barElement.style.height = data[i].amount * 5 + 'px';
        barElement.dataset.tooltipValue = '$' + data[i].amount;
      } else {
        barElement.style.height = '10px';
        barElement.dataset.tooltipValue = '$0';
      }

      if (barValue != null) {
        barValue.textContent = '$' + data[i].amount;
      }

      // find the day with the highest expenditure
      if (sum < data[i].amount) sum = data[i].amount;
      if (data[i].amount == sum) greatestExpense = data[i];
      if (barElement.dataset.day === greatestExpense.day)
        highestBarElement = barElement;
    }

    // change colour of the day with the highest expenditure
    highestBarElement.classList.add('bg-cyan', 'hover');
  });
});
