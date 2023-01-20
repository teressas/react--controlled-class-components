import React, { Component } from 'react';
import './style.css';

export default class RefForm extends Component {
  
  prodname = React.createRef();
  prodcat = React.createRef();
  prodprice = React.createRef;

    handleSubmit = (e) => {
      console.log(e)
      e.preventDefault();
    // this.prodname
    }


  render() {
     <form onSubmit={this.handleSubmit}>
       <input type="text" ref={this.prodname} placeholder="prodname"></input>
       <input type="text" ref={this.prodcat} placeholder="prodcat"></input>
       <input type="text" ref={this.prodprice} placeholder="prodprice"></input>
       <button>Add New</button>
    </form>
  }

}




