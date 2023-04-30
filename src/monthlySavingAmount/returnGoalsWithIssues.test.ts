import { TableData } from '../types';
import { returnGoalsWithIssues } from './helpers';

test('This test runs!', () => {
  const expected = 10;
  const actual = 5 + 5;

  expect(expected).toBe(actual);
});

test('Correctly calculates when no goals have issues', () => {
  const tableData: TableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    {
      month: 'May 2023',
      saved: 500,
      savingGoals: [
        { itemToSaveFor: 'MacBook Pro', itemAmount: 500, monthNeeded: 'May', yearNeeded: '2023' },
        { itemToSaveFor: 'Holiday', itemAmount: 100, monthNeeded: 'May', yearNeeded: '2023' }
      ]
    },
    { month: 'June 2023', saved: 500, savingGoals: [] },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    { month: 'September 2023', saved: 500, savingGoals: [] }
  ];

  const totalSaved = [
    { month: 'April 2023', total: 500 },
    { month: 'May 2023', total: 400 },
    { month: 'April 2023', total: 900 },
    { month: 'April 2023', total: 1300 },
    { month: 'April 2023', total: 1800 },
    { month: 'April 2023', total: 2300 }
  ];

  const expected: [] = [];
  const actual = returnGoalsWithIssues({ tableData, totalSaved });

  expect(expected).toStrictEqual(actual);
});

test('Correctly calculates goals with issues', () => {
  const tableData: TableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    {
      month: 'May 2023',
      saved: 500,
      savingGoals: [
        { itemToSaveFor: 'MacBook Pro', itemAmount: 2500, monthNeeded: 'May', yearNeeded: '2023' },
        { itemToSaveFor: 'Holiday', itemAmount: 100, monthNeeded: 'May', yearNeeded: '2023' }
      ]
    },
    { month: 'June 2023', saved: 500, savingGoals: [] },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    { month: 'September 2023', saved: 500, savingGoals: [] }
  ];

  const totalSaved = [
    { month: 'April 2023', total: 500 },
    { month: 'May 2023', total: -1600 },
    { month: 'June 2023', total: -1100 },
    { month: 'July 2023', total: -1100 },
    { month: 'August 2023', total: -600 },
    { month: 'August 2023', total: -100 }
  ];

  const expected = [
    { month: 'May 2023', goal: 'MacBook Pro' },
    { month: 'May 2023', goal: 'Holiday' }
  ];

  const actual = returnGoalsWithIssues({ tableData, totalSaved });

  expect(expected).toStrictEqual(actual);
});
