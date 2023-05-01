import { TableData } from '../types';
import { updateSavingItems } from './helpers';

test('This test runs!', () => {
  const expected = 2;
  const actual = 1 + 1;

  expect(expected).toBe(actual);
});

test('Correctly adds a new saving goal', () => {
  const itemAmount = '2500';
  const itemToSaveFor = 'MacBook Pro';
  const method = 'add';
  const monthNeeded = 'November';
  const yearNeeded = '2023';
  const tableData: TableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    { month: 'May 2023', saved: 500, savingGoals: [] },
    { month: 'June 2023', saved: 500, savingGoals: [] },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    { month: 'September 2023', saved: 500, savingGoals: [] },
    { month: 'October 2023', saved: 500, savingGoals: [] },
    { month: 'November 2023', saved: 500, savingGoals: [] },
    { month: 'December 2023', saved: 500, savingGoals: [] }
  ];

  const expected: TableData = [
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
      savingGoals: [{ itemToSaveFor, itemAmount, monthNeeded, yearNeeded }]
    },
    { month: 'December 2023', saved: 500, savingGoals: [] }
  ];

  const actual = updateSavingItems({
    itemAmount,
    itemToSaveFor,
    method,
    monthNeeded,
    tableData,
    yearNeeded
  });

  expect(expected).toStrictEqual(actual);
});
