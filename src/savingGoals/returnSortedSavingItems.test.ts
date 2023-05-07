import { TableData } from '../types';
import { returnSortedSavingItems } from './helpers';

test('This test runs!', () => {
  const expected = 4;
  const actual = 2 + 2;

  expect(expected).toBe(actual);
});

test('Returns empty array when no saving items', () => {
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
  const expected: [] = [];
  const actual = returnSortedSavingItems({ tableData });

  expect(expected).toStrictEqual(actual);
});

test('Correctly sorts saving items', () => {
  const tableData: TableData = [
    { month: 'April 2023', saved: 500, savingGoals: [] },
    { month: 'May 2023', saved: 500, savingGoals: [] },
    {
      month: 'June 2023',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'MacBook Pro',
          itemAmount: '2500',
          monthNeeded: 'June',
          yearNeeded: '2023'
        }
      ]
    },
    { month: 'July 2023', saved: 500, savingGoals: [] },
    { month: 'August 2023', saved: 500, savingGoals: [] },
    {
      month: 'September 2023',
      saved: 500,
      savingGoals: [
        {
          itemToSaveFor: 'Holiday',
          itemAmount: '500',
          monthNeeded: 'September',
          yearNeeded: '2023'
        },
        {
          itemToSaveFor: 'FIFA',
          itemAmount: '50',
          monthNeeded: 'September',
          yearNeeded: '2023'
        }
      ]
    },
    { month: 'October 2023', saved: 500, savingGoals: [] },
    { month: 'November 2023', saved: 500, savingGoals: [] },
    { month: 'December 2023', saved: 500, savingGoals: [] }
  ];
  const expected = [
    {
      itemToSaveFor: 'MacBook Pro',
      itemAmount: '2500',
      monthNeeded: 'June',
      yearNeeded: '2023'
    },
    {
      itemToSaveFor: 'Holiday',
      itemAmount: '500',
      monthNeeded: 'September',
      yearNeeded: '2023'
    },
    {
      itemToSaveFor: 'FIFA',
      itemAmount: '50',
      monthNeeded: 'September',
      yearNeeded: '2023'
    }
  ];
  const actual = returnSortedSavingItems({ tableData });

  expect(expected).toStrictEqual(actual);
});
