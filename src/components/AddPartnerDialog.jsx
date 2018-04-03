import React, { Component } from 'react';
import { Dialog, Input,  } from 'react-toolbox';


class AddPartnerDialog extends Component {

  state = {
    active: this.props.show, name: '', public_key: '', phone: '', email: '', url: '', label: ''
  };
  
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  }

  actions = [
    { label: "Cancel", onClick: this.props.handleToggle },
    { label: "Submit", onClick: this.props.handleToggle }
  ];

  render () {
  	console.log(this.state.active);
  	console.log(this.props.show);
    return (
      <div>
        <Dialog
          actions={this.actions}
          active={this.props.show}
          onEscKeyDown={this.props.handleToggle}
          onOverlayClick={this.props.handleToggle}
          title='My awesome dialog'
        >
	        <p>Here you can add your partner's information</p>
	        <section>
		        <Input type='text' label='Partner Name' name='name' icon='person' value={this.state.name} onChange={this.handleChange.bind(this, 'name')}  maxLength={16} />
		        <Input type='text' label='Public Key' name='name' icon='vpn_key' value={this.state.public_key} onChange={this.handleChange.bind(this, 'public_key')} maxLength={48} />
		        <Input type='email' label='Email address' icon='email' value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
		        <Input type='tel' label='Phone' name='phone' icon='phone' value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} />
		        <Input type='text' label='Url' name='url' icon='share' value={this.state.url} required onChange={this.handleChange.bind(this, 'url')} />
		      </section>
        </Dialog>
      </div>
    );
  }
}

module.exports = AddPartnerDialog;
