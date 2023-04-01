const formattedCurrency = new Intl.NumberFormat('en-GB', {
  currency: 'GBP',
  style: 'currency'
});

const returnTotals = ({ tableData }) => {
  let accumulatedSaved = 0;
  let accumulatedWithdrawn = 0;

  const totalSaved = tableData.map(({ month, saved, withdrawn }) => {
    accumulatedSaved += saved;
    accumulatedWithdrawn += withdrawn;

    const amount = accumulatedSaved - accumulatedWithdrawn;

    return { month, amount };
  });

  return totalSaved;
};

export { formattedCurrency, returnTotals };
