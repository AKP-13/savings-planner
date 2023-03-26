/* eslint-disable react/prop-types */
import { useState } from 'react';

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

const SavingGoals = ({ setTableData }) => {
  const [inputs, setInputs] = useState(initialInputs);
  const [savingItems, setSavingItems] = useState([]);

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
    <div style={{ border: '1px solid green', width: '50%' }}>
      <h1>Saving Goals Go Here</h1>
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
        <input type="submit" />
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
