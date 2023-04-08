import { TableData, TotalSaved } from '../types';

const formattedCurrency = new Intl.NumberFormat('en-GB', {
  currency: 'GBP',
  style: 'currency'
});

const returnTotals = ({ tableData }: { tableData: TableData }): TotalSaved => {
  let accumulatedSaved = 0;
  let accumulatedWithdrawn = 0;

  const totalSaved = tableData.map(({ month, saved, savingGoals }) => {
    const withdrawn = savingGoals.reduce((acc, curr) => acc + curr.itemAmount, 0);

    accumulatedSaved += saved;
    accumulatedWithdrawn += withdrawn;

    const total = accumulatedSaved - accumulatedWithdrawn;

    return { month, total };
  });

  return totalSaved;
};

export { formattedCurrency, returnTotals };
