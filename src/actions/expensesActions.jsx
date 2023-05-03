export const addExpense = (expense) => {
  return {
    type: "ADD_EXPENSE",
    payload: expense,
  };
};

export const removeExpense = (expense_id) => {
  return {
    type: "REMOVE_EXPENSE",
    payload: expense_id, 
  };
};

export const editExpense =(expense_id, new_expense)=>{
  return{
    type: "EDIT_EXPENSE",
    payload: {expense_id, new_expense},
    }
}