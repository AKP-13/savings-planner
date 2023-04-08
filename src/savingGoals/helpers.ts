import { SavingGoals, TableData } from '../types';

const updateSavingItems = ({
  itemAmount, // MAKE THIS JUST STRING OR NUMBER
  itemToSaveFor,
  method,
  monthNeeded,
  tableData,
  yearNeeded
}: {
  itemAmount: number | string;
  itemToSaveFor: string;
  method: 'add' | 'delete';
  monthNeeded: string;
  tableData: TableData;
  yearNeeded: string;
}): TableData => {
  return tableData.map((monthObj) => {
    // The month we want to update the savingGoals for
    if (monthObj.month === `${monthNeeded} ${yearNeeded}`) {
      const updatedSavingGoals =
        method === 'add'
          ? [
              ...monthObj.savingGoals,
              { itemToSaveFor, itemAmount: Number(itemAmount), monthNeeded, yearNeeded }
            ]
          : monthObj.savingGoals.filter(
              (goal) => goal.itemAmount !== itemAmount && goal.itemToSaveFor !== itemToSaveFor
            );

      return { ...monthObj, savingGoals: updatedSavingGoals };
    } else {
      return { ...monthObj };
    }
  });
};

/**
 * Returns an array of the saving items
 */
const returnSortedSavingItems = ({ tableData }: { tableData: TableData }) => {
  const savingGoals: SavingGoals = [];

  tableData.forEach((monthObj) => {
    monthObj.savingGoals.forEach((goal) => {
      savingGoals.push({
        itemToSaveFor: goal.itemToSaveFor,
        itemAmount: goal.itemAmount,
        monthNeeded: monthObj.month.split(' ')[0],
        yearNeeded: monthObj.month.split(' ')[1]
      });
    });
  });

  return savingGoals;
};

export { updateSavingItems, returnSortedSavingItems };