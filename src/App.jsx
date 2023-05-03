import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Button, Row} from "react-bootstrap";
import AddexpenseForm from "./components/AddExpenseForm.jsx";
import Expenses from "./components/Expenses.jsx";
import {
  addExpense,
  removeExpense,
  editExpense,
} from "./actions/expensesActions.jsx";
import { GrAdd, GrClose } from "react-icons/gr";
import { useState } from "react";

export function App() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();

  const addNewEXpense = (expense) => {
    dispatch(addExpense(expense));
  };
  const removeEXpense = (id) => {
    dispatch(removeExpense(id));
  };
  const editEXpense = (id, updatedExpense) => {
    dispatch(editExpense(id, updatedExpense));
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Container style={{ marginTop: "2rem" }}>
        <Col
          md="12"
          className="mb-2 d-flex flex-row px-5 py-2 "
          style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
        >
          <h4>Expenses</h4>
          <div className="d-flex flex-row ms-auto">
            <Button variant="light" onClick={handleShow} className="me-3">
              <GrAdd />
            </Button>
            {show && (
              <Button variant="light" onClick={handleClose}>
                <GrClose />
              </Button>
            )}
          </div>
        </Col>
        <Col md="12" className="mb-2">
          {show && (
            <AddexpenseForm setShow={setShow} addExpense={addNewEXpense} />
          )}
        </Col>
        <Col md="12">
          <Expenses
            expenseData={expenses}
            removeExpense={removeEXpense}
            editExpense={editEXpense}
          />
        </Col>
      </Container>
    </div>
  );
}

export default App;
