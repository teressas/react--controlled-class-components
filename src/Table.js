import React, { Component } from 'react';
import './style.css';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  
  render() {
    const { products, handleDeletec } = this.props;
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            { products.map((prod, i )=> (
              // console.log(prod,i)
              <tr key={i}>
                <td>{prod.prodname}</td>
                <td>{prod.prodcat}</td>
                <td>{prod.prodprice}</td>
                <td><button onClick={ (e) => { this.props.handleDelete(i) }}>Delete</button></td>
              </tr>
            )) }
          </tbody>
        </table>
      
    </>
    );
    
  }
}
