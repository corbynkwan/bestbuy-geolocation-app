import React from "react";
import "./styles.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

var Columns = [
    {
      dataField: "Full name",
      text: "Full name",
      editable: false,
      headerStyle: () => {
        return { width: "10%" };
      }
    },
  ];
  
  
  // var Columns = [
  //   {
  //     headerStyle: (colum, colIndex) => {
  //       return { width: '80px', textAlign: 'center' };
  //     }
  //   }
  // ]
  
function Store() {
  return (
    <body id="page-store">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Full name</th>
            <th>Item(s) ordered</th>
            <th>Time from store</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Corie Barry</td>
            <td></td>
            <td>2 min</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Lisa Caputo</td>
            <td></td>
            <td>4 min</td>
          </tr>
          <tr>
            <td>3</td>
            <td>David Kenny</td>
            <td></td>
            <td>12 min</td>
          </tr>
        </tbody>
      </Table>
    </body>
  );
};

export default Store;
