/*
(REDO) Given the following UI, use React Class Components with TypeScript to 
implement the following product management page, while matching the styling as closely as 
possible. 
- The user can fill out the fields and click “Add New” to create a new product in the table. 
However, if any of the input fields are empty, no product should be created.  

- The user can delete existing products in the table by clicking the delete button.  
- By default, when the user loads the page for the first time, there should be these 3 items in 
the table as shown below. 
  
Implement this once with controlled components, and another time with uncontrolled 
components.
*/

import React, { Component } from 'react';
import './style.css';
import Form from './Form.js';
import Table from './Table.js';
import './style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
      {prodname: "M&M", prodcat: "Snacks", prodprice: "$1.99"},
      {prodname: "Table", prodcat: "Furniture", prodprice: "$199"},
      {prodname: "kale", prodcat: "Vegetables", prodprice: "$2.49"}
    ],
    formData: { prodname: '', prodcat: '', prodprice: '' },

  };
  }


  handleChange = (field) => (e) => {
    // console.log(e.target);
    this.setState((prevState) => ({
      ...prevState,
      formData: { ...prevState.formData, [field]: e.target.value },
    }));
  };

  handleSubmit = (e) => {
    // console.log(e)
    e.preventDefault();
    console.log('this.state.formData =', this.state.formData);

    this.setState((prevState) => ({
      ...prevState,
      products: [
        ...prevState.products,
        this.state.formData
      ]
    }));

    this.setState({
      formData: {
        prodname: '',
        prodcat: '',
        prodprice: 0,
      },
    });
  };


  handleDelete= (targetIdx) => {
    // console.log(i)
    this.setState((prevState) => ({
      ...prevState,
      products: this.state.products.filter((_,i) => i !== targetIdx)
    }))
  };
  

  render() {
    
    return (
      <div className="App">
        {/* {JSON.stringify(this.state.products)} */}
        <Table products={this.state.products} handleDelete={this.handleDelete} />
        <hr/>
        {/* Controlled Component */}
        <Form formData={this.state.formData} handleChange={this.handleChange} handleSubmit={this.handleSubmit} /> 

        {/* Uncontrolled Component */}
        {/* <RefForm products={this.state.products}/> */}
      </div>
    );
  }
}
