import React from "react";
import Expense from "./Expense";
import { Row } from "react-bootstrap";

export default function Expenses(props) {
  return (
    <div>
      <Row>
        {props.expenseData.map((expense) => {
          return (
            <Expense
              expenseInfo={expense}
              key={expense.id}
              removeExpense={props.removeExpense}
              editExpense={props.editExpense}
            />
          );
        })}
      </Row>  
      </div>
  );
}
