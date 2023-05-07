import { returnMonthsWithNegativeTotals } from './helpers';

test('This test runs!', () => {
  const expected = 13;
  const actual = 7 + 6;

  expect(expected).toBe(actual);
});

test('Returns an empty array if all totals are non-negative', () => {
  const totalSaved = [
    { month: 'January 2023', total: 0 },
    { month: 'February 2023', total: 500 },
    { month: 'March 2023', total: 1000 },
    { month: 'April 2023', total: 1500 }
  ];

  const monthsWithNegativeTotals = returnMonthsWithNegativeTotals({ totalSaved });

  const expected: [] = [];
  const actual = monthsWithNegativeTotals;

  expect(expected).toStrictEqual(actual);
});

test('Correctly returns months with negative totals values', () => {
  const totalSaved = [
    { month: 'January 2023', total: 0 },
    { month: 'February 2023', total: 500 },
    { month: 'March 2023', total: -1 },
    { month: 'April 2023', total: -2 },
    { month: 'May 2023', total: 100 },
    { month: 'June 2023', total: 123 },
    { month: 'July 2023', total: 0 }
  ];

  const expected = ['March 2023', 'April 2023'];
  const actual = returnMonthsWithNegativeTotals({ totalSaved });

  expect(expected).toStrictEqual(actual);
});
