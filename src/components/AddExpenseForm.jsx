import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { AiOutlineCheck } from "react-icons/ai"
import  category  from "../reducers/expensesReducer";
import Select from "react-select";
export default class AddExpenseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item:"",
      date:"" ,
      amount:"",
      category:"",
    };
  }
 
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleCatChange=(e)=>{
    this.setState({
      category:e.label,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addExpense(this.state);
    this.setState({
      item:"",
      date:"" ,
      amount:"",
      category:"",
    });
   this.props.setShow(false)
  };
 
  render() {
    return (
      <div>
          <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Item or Name"
              value={this.state.item}
              name="item"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date"
              value={this.state.date}
              name="date"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="00"
              value={this.state.amount}
              name="amount"
              onChange={this.handleChange}
            />
            <Form.Text className="amount-muted">
              Enter amount in USD
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSelect">
            <Select aria-label="Default select example"  placeholder="Category"
             
              onChange={this.handleCatChange} options={category} name="category">
            </Select>
            <Form.Text className="amount-muted">Select a category</Form.Text>
          </Form.Group>
          <Button variant="light" type="submit">
            <AiOutlineCheck />
          </Button>
        </Form>
      </div>
    );
  }
}
