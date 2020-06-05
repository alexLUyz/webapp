import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import Button from "./Button";



class Infos extends Component  {

    renderRows() {
      return this.props.info.map((row, index) => {
        return (
          <tr key={index}>
            <td>{index}</td>
            <td>{row.fruit}</td>
            <td>{row.size}</td>
            <td><Button index={index} onRowsSelect={this.props.onRowsSelect} /></td>
          </tr>
        );
      });
    }


  render() {  
    return (
      <Table striped bordered hover variant="dark">
      <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Select</th>
        </tr>
      </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </Table>
    );
  }
}


export default Infos;
