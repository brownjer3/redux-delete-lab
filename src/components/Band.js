import React, { Component } from 'react';
// import {connect} from 'react'

class Band extends Component {

  handleDelete = () => {
    this.props.delete(this.props.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleDelete}>DELETE</button>
      </div>
    );
  }
};



export default Band
