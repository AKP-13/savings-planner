import { returnTotals } from './helpers';

test('This test runs!', () => {
  const expected = 5;
  const actual = 2 + 3;

  expect(expected).toBe(actual);
});

test('Monthly savings of 500 with no saving goals.', () => {
  const expected = [
    { month: 'April 2023', total: 500 },
    { month: 'May 2023', total: 1000 },
    { month: 'June 2023', total: 1500 },
    { month: 'July 2023', total: 2000 },
    { month: 'August 2023', total: 2500 },
    { month: 'September 2023', total: 3000 },
    { month: 'October 2023', total: 3500 },
    { month: 'November 2023', total: 4000 },
    { month: 'December 2023', total: 4500 },
    { month: 'January 2024', total: 5000 },
    { month: 'February 2024', total: 5500 },
    { month: 'March 2024', total: 6000 },
    { month: 'April 2024', total: 6500 },
    { month: 'May 2024', total: 7000 },
    { month: 'June 2024', total: 7500 },
    { month: 'July 2024', total: 8000 },
    { month: 'August 2024', total: 8500 },
    { month: 'September 2024', total: 9000 },
    { month: 'October 2024', total: 9500 },
    { month: 'November 2024', total: 10000 },
    { month: 'December 2024', total: 10500 },
    { month: 'January 2025', total: 11000 },
    { month: 'February 2025', total: 11500 },
    { month: 'March 2025', total: 12000 },
    { month: 'April 2025', total: 12500 },
    { month: 'May 2025', total: 13000 },
    { month: 'June 2025', total: 13500 },
    { month: 'July 2025', total: 14000 },
    { month: 'August 2025', total: 14500 },
    { month: 'September 2025', total: 15000 },
    { month: 'October 2025', total: 15500 },
    { month: 'November 2025', total: 16000 },
    { month: 'December 2025', total: 16500 }
  ];

  const tableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    { month: 'May 2023', saved: 500, savingGoals: [] },
    { month: 'June 2023', saved: 500, savingGoals: [] },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    { month: 'September 2023', saved: 500, savingGoals: [] },
    { month: 'October 2023', saved: 500, savingGoals: [] },
    { month: 'November 2023', saved: 500, savingGoals: [] },
    { month: 'December 2023', saved: 500, savingGoals: [] },
    { month: 'January 2024', saved: 500, savingGoals: [] },
    { month: 'February 2024', saved: 500, savingGoals: [] },
    { month: 'March 2024', saved: 500, savingGoals: [] },
    { month: 'April 2024', saved: 500, savingGoals: [] },
    { month: 'May 2024', saved: 500, savingGoals: [] },
    { month: 'June 2024', saved: 500, savingGoals: [] },
    { month: 'July 2024', saved: 500, savingGoals: [] },
    { month: 'August 2024', saved: 500, savingGoals: [] },
    { month: 'September 2024', saved: 500, savingGoals: [] },
    { month: 'October 2024', saved: 500, savingGoals: [] },
    { month: 'November 2024', saved: 500, savingGoals: [] },
    { month: 'December 2024', saved: 500, savingGoals: [] },
    { month: 'January 2025', saved: 500, savingGoals: [] },
    { month: 'February 2025', saved: 500, savingGoals: [] },
    { month: 'March 2025', saved: 500, savingGoals: [] },
    { month: 'April 2025', saved: 500, savingGoals: [] },
    { month: 'May 2025', saved: 500, savingGoals: [] },
    { month: 'June 2025', saved: 500, savingGoals: [] },
    { month: 'July 2025', saved: 500, savingGoals: [] },
    { month: 'August 2025', saved: 500, savingGoals: [] },
    { month: 'September 2025', saved: 500, savingGoals: [] },
    { month: 'October 2025', saved: 500, savingGoals: [] },
    { month: 'November 2025', saved: 500, savingGoals: [] },
    { month: 'December 2025', saved: 500, savingGoals: [] }
  ];

  const actual = returnTotals({ tableData });

  expect(expected).toStrictEqual(actual);
});

test('Monthly savings of 500 with one saving goal.', () => {
  const expected = [
    { month: 'April 2023', total: 500 },
    { month: 'May 2023', total: 1000 },
    { month: 'June 2023', total: 1500 },
    { month: 'July 2023', total: 2000 },
    { month: 'August 2023', total: 2500 },
    { month: 'September 2023', total: 3000 },
    { month: 'October 2023', total: 3500 },
    { month: 'November 2023', total: 1500 }
  ];

  const tableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    { month: 'May 2023', saved: 500, savingGoals: [] },
    { month: 'June 2023', saved: 500, savingGoals: [] },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    { month: 'September 2023', saved: 500, savingGoals: [] },
    { month: 'October 2023', saved: 500, savingGoals: [] },
    {
      month: 'November 2023',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'MacBook Pro',
          itemAmount: 2500,
          monthNeeded: 'November',
          yearNeeded: '2023'
        }
      ]
    }
  ];

  const actual = returnTotals({ tableData });

  expect(expected).toStrictEqual(actual);
});

test('Monthly savings of 500 with multiple saving goals.', () => {
  const expected = [
    { month: 'April 2023', total: 500 },
    { month: 'May 2023', total: 1000 },
    { month: 'June 2023', total: 1500 },
    { month: 'July 2023', total: 2000 },
    { month: 'August 2023', total: 2500 },
    { month: 'September 2023', total: 3000 },
    { month: 'October 2023', total: 3500 },
    { month: 'November 2023', total: 0 },
    { month: 'December 2023', total: 200 }
  ];

  const tableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    { month: 'May 2023', saved: 500, savingGoals: [] },
    { month: 'June 2023', saved: 500, savingGoals: [] },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    { month: 'September 2023', saved: 500, savingGoals: [] },
    { month: 'October 2023', saved: 500, savingGoals: [] },
    {
      month: 'November 2023',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'MacBook Pro',
          itemAmount: 2500,
          monthNeeded: 'November',
          yearNeeded: '2023'
        },
        {
          itemToSaveFor: 'Holiday',
          itemAmount: 1500,
          monthNeeded: 'November',
          yearNeeded: '2023'
        }
      ]
    },
    {
      month: 'December 2023',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'Christmas',
          itemAmount: 300,
          monthNeeded: 'December',
          yearNeeded: '2023'
        }
      ]
    }
  ];

  const actual = returnTotals({ tableData });

  expect(expected).toStrictEqual(actual);
});
