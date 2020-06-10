import React, { Component } from "react";
import { Table } from 'react-bootstrap';
import Button from "./Button";



class Infos extends Component  {

  //state ={ selected: false };

  // onClick = () => {

  //   this.setState({
  //     selected: !this.state.selected
  //   });


  // }
  
  renderRows() {
    return this.props.info.map((row, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{row.fruit}</td>
          <td>{row.size}</td>
          <td><Button 
                all={false} 
                select="Select" 
                selected="Selected" 
                index={index} 
                onRowsSelect={this.props.onRowsSelect} 
              />
          </td>
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
            <th><Button 
                  all={true} 
                  select="Select" 
                  selected="All Selected" 
                />
            </th>
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
