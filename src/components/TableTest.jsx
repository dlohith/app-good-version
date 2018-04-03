
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class TableTest extends React.Component {
  

	render() {
		const  products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  		}];
    return (
      <div>
        <BootstrapTable
          data={ products }
          pagination>
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
module.exports = TableTest;