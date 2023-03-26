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

const SavingGoals = () => {
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
  };

  return (
    <div style={{ border: '1px solid green', width: '50%' }}>
      <h1>Saving Goals Go Here</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Item to save for:
          <input
            type="text"
            name="itemToSaveFor"
            value={inputs.itemToSaveFor || ''}
            onChange={handleChange}
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
            name="itemAmount"
            value={inputs.itemAmount || ''}
            onChange={handleChange}
          />
        </label>

        <label>
          Month needed:
          <select name="monthNeeded" onChange={handleChange} value={inputs.monthNeeded || ''}>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </label>

        <label>
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
            <div key={itemToSaveFor}>
              <p>Item: {itemToSaveFor}</p>
              <p>Amount: {itemAmount}</p>
              <p>
                Month needed: {monthNeeded} {yearNeeded}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SavingGoals;
