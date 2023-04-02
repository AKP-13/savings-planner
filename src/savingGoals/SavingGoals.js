/* eslint-disable react/prop-types */
import { useState } from 'react';
import MonthlySavingCard from './MonthlySavingCard';

const initialInputs = { monthNeeded: 'January', yearNeeded: '2023' };
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const years = ['2023', '2024', '2025'];

const SavingGoals = ({ tableData, setTableData }) => {
  const [inputs, setInputs] = useState(initialInputs);

  const [savingItems, setSavingItems] = useState([
    { itemAmount: '500', itemToSaveFor: 'Holiday', monthNeeded: 'July', yearNeeded: '2023' },
    { itemAmount: '60', itemToSaveFor: 'FIFA', monthNeeded: 'October', yearNeeded: '2023' },
    { itemAmount: '2500', itemToSaveFor: 'MacBook', monthNeeded: 'December', yearNeeded: '2023' },
    {
      itemAmount: '450',
      itemToSaveFor: "Jord's Stag",
      monthNeeded: 'February',
      yearNeeded: '2024'
    },
    {
      itemAmount: '250',
      itemToSaveFor: 'Suit',
      monthNeeded: 'February',
      yearNeeded: '2024'
    },
    { itemAmount: '4000', itemToSaveFor: 'LISA', monthNeeded: 'April', yearNeeded: '2024' },
    { itemAmount: '1200', itemToSaveFor: 'Phone', monthNeeded: 'October', yearNeeded: '2024' },
    { itemAmount: '4000', itemToSaveFor: 'LISA', monthNeeded: 'April', yearNeeded: '2025' }
  ]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavingItems((values) => [...values, { ...inputs }]);
    setInputs(initialInputs);
    setTableData((prev) => {
      const monthToUpdate = prev.find((obj) => {
        return obj.month === `${inputs.monthNeeded} ${inputs.yearNeeded}`;
      });

      monthToUpdate.withdrawn += Number(inputs.itemAmount);

      return [...prev];
    });
  };

  return (
    <div>
      <MonthlySavingCard tableData={tableData} setTableData={setTableData} />

      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <label style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          Item to save for:
          <input
            type="text"
            name="itemToSaveFor"
            value={inputs.itemToSaveFor || ''}
            onChange={handleChange}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          Amount:
          <input
            type="number"
            name="itemAmount"
            value={inputs.itemAmount || ''}
            onChange={handleChange}
          />
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          Month needed:
          <select name="monthNeeded" onChange={handleChange} value={inputs.monthNeeded || ''}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>

        <label style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
          Year needed:
          <select name="yearNeeded" onChange={handleChange} value={inputs.yearNeeded || ''}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
        <input type="submit" value="Add" />
      </form>
      <div>
        {savingItems.length > 0 &&
          savingItems.map(({ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }) => (
            <div
              key={`${itemToSaveFor}-${monthNeeded}-${yearNeeded}`}
              style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <span>Item: {itemToSaveFor}</span>
              <span>Amount: £{itemAmount}</span>
              <span>
                Month needed: {monthNeeded} {yearNeeded}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SavingGoals;
