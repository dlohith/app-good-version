import React, { Component } from 'react';
import { Navigation, Button} from 'react-toolbox';
import SendFileDialog from './SendFileDialog';
import ReactTable from 'react-table'

class HomeMainContent extends Component {
	state = {
    showSendFile: false
  };

	handleToggle = () => {
    this.setState({ showSendFile: !this.state.showSendFile });
  }

  getColumnsDate() {
  	const columns = [{
	    Header: 'Partner',
	    accessor: 'name' // String-based value accessors!
	  	}, {
	    Header: 'File Name',
	    accessor: 'file',
	    Cell: props => <span >{props.value}</span> // Custom cell components!
	  	}, {
	  	Header: 'Status',
	    accessor: 'status',
	    Cell: props => <span >{props.value}</span> // Custom cell components!
	  	}, {
	  	Header: 'Sent Time',
	    accessor: 'time',
	    Cell: props => <span >{props.value}</span> // Custom cell components!
	  	}];
	  return columns;
  }

  getData() {
  	const data = [{
  	  name: 'Walmart',
	    file: 'Order.edi',
	    status: 'Sent',
	    time: '03/21/18 12:00PM'
	  },{
	  	name: 'Amazon',
	    file: 'Ack.xml',
	    status: 'Recieved',
	    time: '03/21/18 12:00PM'
	  },{
	  	name: 'Apple',
	    file: 'OrderStatus.xml',
	    status: 'In Progress',
	    time: '03/21/18 12:00PM'
	  },{
	  	name: 'Microsoft',
	    file: 'Ack.json',
	    status: 'Failed',
	    time: '03/21/18 12:00PM'
	  },{
	  	name: 'Uber',
	    file: 'phone_orders.xls',
	    status: 'Received',
	    time: '	03/25/18 12:00PM'
	  }];
	  return data
  }

	render() {
		return (
			<div>
				<Navigation type='horizontal'>
	        <Button label='Send File' onClick={ this.handleToggle } raised primary/>
	      </Navigation>
	      <br />
	      <SendFileDialog show= {this.state.showSendFile} handleToggle={ this.handleToggle} />
	      <ReactTable minRows={ 1 }
			    data={ this.getData() }
			    columns={ this.getColumnsDate() }
	  		/>
	  	</div>
		);
	}

}

module.exports = HomeMainContent;