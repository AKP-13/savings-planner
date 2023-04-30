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

  const monthsWithNegativeTotalValues: [] = [];

  const expected: [] = [];
  const actual = returnGoalsWithIssues({ tableData, monthsWithNegativeTotalValues });

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

  const monthsWithNegativeTotalValues = ['May 2023', 'June 2023', 'July 2023', 'August 2023'];

  const expected = [
    { month: 'May 2023', goal: 'MacBook Pro' },
    { month: 'May 2023', goal: 'Holiday' }
  ];

  const actual = returnGoalsWithIssues({ tableData, monthsWithNegativeTotalValues });

  expect(expected).toStrictEqual(actual);
});
