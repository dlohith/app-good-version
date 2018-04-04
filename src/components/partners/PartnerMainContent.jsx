import React, { Component } from 'react';
import { Navigation, Button} from 'react-toolbox';
import AddPartnerDialog from './AddPartnerDialog';
import ReactTable from 'react-table'

class PartnerMainContent extends Component {

	state = {
    showPartner: false
  };

	handleToggle = () => {
    this.setState({ showPartner: !this.state.showPartner });
  }

  getColumnsDate() {
  	const columns = [{
	    Header: 'Partner Name',
	    accessor: 'name' // String-based value accessors!
	  	}, {
	    Header: 'Partner URL',
	    accessor: 'url',
	    Cell: props => <span >{props.value}</span> // Custom cell components!
	  	}, {
	  	Header: 'Public Key',
	    accessor: 'key',
	    Cell: props => <span >{props.value}</span> // Custom cell components!
	  	}];
	  return columns;
  }

  getData() {
  	const data = [{
  	  name: 'Walmart',
	    url: 'edi.walmart.com',
	    key: '0x627306090abab3a6e1400e9345bc60c78a8bef57',
	  },{
	  	name: 'Amazon',
	    url: 'edi.amazon.com',
	    key: '0x727306090abab3a6e1400e9345bc60c78a8bef50',
	  },{
	  	name: 'Apple',
	    url: 'xml.apple.com',
	    key: '0x827306090abab3a6e1400e9345bc60c78a8bef51',
	  },{
	  	name: 'Microsoft',
	    url: 'share.microsoft.com',
	    key: '0x927306090abab3a6e1400e9345bc60c78a8bef52',
	  },{
	  	name: 'Uber',
	    url: 'send.uber.com',
	    key: '0x227306090abab3a6e1400e9345bc60c78a8bef53',
	  }];
	  return data
  }

	render() {
		return (
			<div>
				<Navigation type='horizontal'>
	        <Button icon='delete' label='Remove Partner' raised primary />
	        <Button icon='add' label='Add Partner' onClick={ this.handleToggle }  raised primary />
	      </Navigation>
	      <br />
	      <AddPartnerDialog show= {this.state.showPartner} handleToggle={ this.handleToggle} />
	      <ReactTable minRows={ 1 }
			    data={ this.getData() }
			    columns={ this.getColumnsDate() }
	  		/>
	  	</div>
		);
	}
}

module.exports = PartnerMainContent;