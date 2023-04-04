const updateWithdrawnAmount = (tableData, monthNeeded, yearNeeded, itemAmount) => {
  return tableData.map((monthObj) => {
    if (monthObj.month === `${monthNeeded} ${yearNeeded}`) {
      return {
        ...monthObj,
        withdrawn: monthObj.withdrawn - Number(itemAmount)
      };
    } else {
      return { ...monthObj };
    }
  });
};

const removeSavingItem = (savingItems, itemAmount, itemToSaveFor, monthNeeded, yearNeeded) => {
  return savingItems.filter(
    (item) =>
      item.itemAmount !== itemAmount ||
      item.itemToSaveFor !== itemToSaveFor ||
      item.monthNeeded !== monthNeeded ||
      item.yearNeeded !== yearNeeded
  );
};

export { updateWithdrawnAmount, removeSavingItem };
