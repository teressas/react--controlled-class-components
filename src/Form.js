import React, { Component } from 'react';
import './style.css';

export default class Form extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { formData, handleChange, handleSubmit, products } = this.props;

    return (
      <div>
        <h2>Add Product</h2>
        <form onSubmit={(e) => this.props.handleSubmit(e)}>
          <div>
            <label>Product Name: </label>
            <input
              type="text"
              name="prodname"
              value={this.props.formData.prodname}
              onChange={this.props.handleChange('prodname')}
              required
            />

            <label>Product Category: </label>
            <input
              type="text"
              name="prodcat"
              value={this.props.formData.prodcat}
              onChange={this.props.handleChange('prodcat')}
              required
            />
            <label>Product Price: </label>
            <input
              type="float"
              name="prodprice"
              value={this.props.formData.prodprice}
              onChange={this.props.handleChange('prodprice')}
              required
            />
            <button>Add New</button>
          </div>
        </form>
      </div>
    );
  }
}
