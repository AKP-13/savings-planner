import { useState } from 'react';

const initialInputs = { monthNeeded: 'January', yearNeeded: '2023' };

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

  console.log('savingItems', savingItems);

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
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </label>

        <label>
          Year needed:
          <select name="yearNeeded" onChange={handleChange} value={inputs.yearNeeded || ''}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </label>
        <input type="submit" />
      </form>
      <div>
        {savingItems.length > 0 &&
          savingItems.map((item) => {
            return (
              <div key={item.itemToSaveFor}>
                <p>Item: {item.itemToSaveFor}</p>
                <p>Amount: {item.itemAmount}</p>
                <p>Month needed: {item.monthNeeded}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SavingGoals;
