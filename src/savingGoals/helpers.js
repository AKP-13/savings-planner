/**
 * Update the `withdrawn` amount in the `tableData` for the month that the saving goal was needed in.
 * e.g. if we are deleting a goal of value `X` in month `Y`. Remove `X` from month `Y`'s `withdrawn` figure.
 */
const updateWithdrawnAmount = ({ itemAmount, method, monthNeeded, tableData, yearNeeded }) => {
  return tableData.map((monthObj) => {
    if (monthObj.month === `${monthNeeded} ${yearNeeded}`) {
      return {
        ...monthObj,
        withdrawn:
          method === 'subtract'
            ? monthObj.withdrawn - Number(itemAmount)
            : monthObj.withdrawn + Number(itemAmount)
      };
    } else {
      return { ...monthObj };
    }
  });
};

/**
 * Filter out the deleted item from the list of `savingItems`
 */
const removeSavingItem = ({ itemAmount, itemToSaveFor, monthNeeded, savingItems, yearNeeded }) => {
  return savingItems.filter(
    (item) =>
      item.itemAmount !== itemAmount ||
      item.itemToSaveFor !== itemToSaveFor ||
      item.monthNeeded !== monthNeeded ||
      item.yearNeeded !== yearNeeded
  );
};

export { updateWithdrawnAmount, removeSavingItem };
