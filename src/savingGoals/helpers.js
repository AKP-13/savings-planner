/**
 * Update the `savingGoals` array for a particaular month
 */
const updateSavingItems = ({
  itemAmount,
  itemToSaveFor,
  method,
  monthNeeded,
  tableData,
  yearNeeded
}) => {
  return tableData.map((monthObj) => {
    // The month we want to update the savingGoals for
    if (monthObj.month === `${monthNeeded} ${yearNeeded}`) {
      const updatedSavingGoals =
        method === 'add'
          ? [...monthObj.savingGoals, { itemToSaveFor, itemAmount: Number(itemAmount) }]
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
const returnSortedSavingItems = (tableData) => {
  const savingGoals = [];

  tableData.forEach((monthObj) => {
    monthObj.savingGoals.forEach((goal) => {
      savingGoals.push({
        itemToSave: goal.itemToSaveFor,
        itemAmount: goal.itemAmount,
        monthNeeded: monthObj.month.split(' ')[0],
        yearNeeded: monthObj.month.split(' ')[1]
      });
    });
  });

  return savingGoals;
};

export { updateSavingItems, returnSortedSavingItems };
