const category=[
  { 
    value:"purchases",
    label:"Purchases",
     
  },
  {
    value:"bills",
    label:"Bills",
  },
  {
    value:"sentfunds",
    label:"Sent Funds",
  },
]
const initialState = {
  expenses: [
    {
      item: "Internets",
      date: "2023-04-21",
      amount: "500",
      category: category[1].label,
      id: "dfsdjkvnsdjkfnskf",
    },
    {
      item: "Computer",
      date: "2023-03-16",
      amount: "3500",
      category: category[0].label,
      id: "45fsdsjkvnsdjkfnskf",
    },
    {
      item: "Ma",
      date: "2023-02-21",
      amount: "5000",
      category: category[2].label,
      id: "weonbfjkvnwvnsdjkfnskf",
    },
  ],
};

export const expensesReducer = (state = initialState,{ type, payload }) => {
  switch (type) {
    case "ADD_EXPENSE":
      const newExpense = {
        item: payload.item,
        date: payload.date,
        amount: payload.amount,
        category: payload.category,
        id: Math.random().toString(),
      };
      return { ...state, expenses: [...state.expenses, newExpense] };
    case "REMOVE_EXPENSE":
      const undeletedExpenses = state.expenses.filter(
        (expense) => expense.id !== payload
      );
      return { expenses: undeletedExpenses };
    case "EDIT_EXPENSE":
      return {
        expenses: state.expenses.map((expense) =>
          expense.id === payload.expense_id ? payload.new_expense : expense
        ),
      };
    default:
      return state;
  }
};
export default category;