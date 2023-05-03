import { Card, Col, Button, Modal, Row } from "react-bootstrap";
import { useState } from "react";
import EditExpenseForm from "./EditExpenseForm";
import "../App.css";
import { RiFileEditFill, RiDeleteBin2Fill } from "react-icons/ri";
export default function Expense(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    props.removeExpense(props.expenseInfo.id);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditExpenseForm
            expenseInfo={props.expenseInfo}
            editExpense={props.editExpense}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>
        <Col lg="4" md="6" sm="12" style={{ marginBottom: "2rem" }}>
          <Card className="h-100">
            <Card.Body className="pt-4">
              <Card.Subtitle
                className="mb-4 text-muted"
                style={{
                  borderBottom: "0.2px solid black",
                  width: "fit-content",
                }}
              >
                {props.expenseInfo.item}
              </Card.Subtitle>
              <Card.Text>Date: {props.expenseInfo.date}</Card.Text>
              <Card.Text>Amount : USD ${props.expenseInfo.amount}.00</Card.Text>
              <Card.Text>Category : {props.expenseInfo.category}</Card.Text>
              <div className=" d-flex flex-row justify-content-end">
                <Button
                  variant="light"
                  onClick={handleShow}
                  className="me-3 btn-lg"
                >
                  <RiFileEditFill />
                </Button>
                <Button
                  variant="light"
                  onClick={handleDelete}
                  className=" btn-lg"
                >
                  <RiDeleteBin2Fill />
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </>
  );
}
