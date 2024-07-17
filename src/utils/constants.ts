const MONTHS = [
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
const YEARS = ['2024', '2025', '2026'];

const initialMonthlySavingAmount = 310;

const initialTableData = [
  {
    month: 'July 2024',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'August 2024',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'September 2024',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'October 2024',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'November 2024',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'December 2024',
    saved: initialMonthlySavingAmount,
    savingGoals: [
      {
        itemToSaveFor: 'Christmas',
        itemAmount: '500',
        monthNeeded: 'December',
        yearNeeded: '2024'
      }
    ]
  },
  {
    month: 'January 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: [
      {
        itemToSaveFor: 'Anniversary',
        itemAmount: '100',
        monthNeeded: 'January',
        yearNeeded: '2025'
      }
    ]
  },
  {
    month: 'February 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: [
      {
        itemToSaveFor: "Kinte's Birthday",
        itemAmount: '100',
        monthNeeded: 'February',
        yearNeeded: '2025'
      },
      {
        itemToSaveFor: "Kinte's parent's bdays",
        itemAmount: '100',
        monthNeeded: 'February',
        yearNeeded: '2025'
      }
    ]
  },
  {
    month: 'March 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'April 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: [
      {
        itemToSaveFor: "Mum's Birthday",
        itemAmount: '100',
        monthNeeded: 'April',
        yearNeeded: '2025'
      }
    ]
  },
  {
    month: 'May 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'June 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: [
      {
        itemToSaveFor: 'My Birthday',
        itemAmount: '60',
        monthNeeded: 'June',
        yearNeeded: '2025'
      }
    ]
  },
  {
    month: 'July 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'August 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'September 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'October 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'November 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: []
  },
  {
    month: 'December 2025',
    saved: initialMonthlySavingAmount,
    savingGoals: [
      {
        itemToSaveFor: 'Christmas 2025',
        itemAmount: '500',
        monthNeeded: 'December',
        yearNeeded: '2025'
      }
    ]
  }
];

export { initialMonthlySavingAmount, initialTableData, MONTHS, YEARS };
