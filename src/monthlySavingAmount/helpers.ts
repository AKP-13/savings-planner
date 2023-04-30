import { TableData, TotalSaved } from '../types';

const returnMonthsWithNegativeTotals = ({ totalSaved }: { totalSaved: TotalSaved }) =>
  totalSaved.reduce((acc, curr) => {
    if (curr.total < 0) {
      return [...acc, curr.month];
    }

    return acc;
  }, []);

const returnGoalsWithIssues = ({
  monthsWithNegativeTotalValues,
  tableData
}: {
  monthsWithNegativeTotalValues: string[];
  tableData: TableData;
}) =>
  monthsWithNegativeTotalValues.reduce((acc: any, curr: any) => {
    const [month, year] = curr.split(' ');

    // find the tableData object with this month
    const foundObj = tableData.find((monthObj) => monthObj.month === `${month} ${year}`);

    if (foundObj && foundObj.savingGoals.length > 0) {
      const goals = foundObj.savingGoals.map((obj) => ({ month: curr, goal: obj.itemToSaveFor }));

      return [...acc, ...goals];
    }

    return acc;
  }, []);

export { returnMonthsWithNegativeTotals, returnGoalsWithIssues };
