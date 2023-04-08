interface SavingGoal {
  itemToSaveFor: string;
  itemAmount: number;
  monthNeeded: string;
  yearNeeded: string;
}

export type SavingGoals = SavingGoal[];

interface MonthObj {
  month: string;
  saved: number;
  savingGoals: SavingGoals;
}

export type TableData = MonthObj[];

export type SetTableData = React.Dispatch<React.SetStateAction<TableData>>;

export type TotalSaved = { month: string; total: number }[];
