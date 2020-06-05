import React, { Component } from "react";
import Table, {Thead, Tbody, Tr, Th, Td} from "react-row-select-table"

// class AllInfo extends Component {
  
//   renderRows() {
//     return this.props.info.map((row, index) => {
//       return (
//         <tr key={index}>
//           <td>{index}</td>
//           <td>{row.fruit}</td>
//           <td>{row.size}</td>
//           <td>{row.color}</td>
//         </tr>
//       );
//     });
//   }


//   render() {
//     //console.log(this.props.info);

//     return (
//       <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Fruit Name</th>
//             <th>Size</th>
//             <th>Color</th>
//           </tr>
//         </thead>
       
//         <tbody>
//           {this.renderRows()}
//         </tbody>
//       </Table>
//     );
//   }
// }

class Infos extends Component  {

    renderRows() {
      return this.props.info.map((row, index) => {
        return (
          <Tr key={index}>
            <Td>{index}</Td>
            <Td>{row.fruit}</Td>
            <Td>{row.size}</Td>
            <Td>{row.color}</Td>
          </Tr>
        );
      });
    }


  render() {
    return (
      <Table onCheck={value => this.props.onRowsSelect(value.map(index => this.props.info[index]))} >
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Fruit Name</Th>
          <Th>Size</Th>             
          <Th>Color</Th>
        </Tr>
      </Thead>
      <Tbody>
        {this.renderRows()}
      </Tbody>
    </Table>
    );
  }
}


export default Infos;
