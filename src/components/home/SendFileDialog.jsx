import React, { Component } from 'react';
import { Dialog, Input, Navigation } from 'react-toolbox';


class SendFileDialog extends Component {

  state = {
    active: this.props.show, name: '', file: ''
  };
  
  handleChange = (name, value) => {
    this.setState({...this.state, [name]: value});
  };

  actions = [
    { label: "Cancel", onClick: this.props.handleToggle },
    { label: "Submit", onClick: this.props.handleToggle }
  ];

  render () {
    return (
      <div>
        <Dialog
          actions={this.actions}
          active={this.props.show}
          onEscKeyDown={this.props.handleToggle}
          onOverlayClick={this.props.handleToggle}
          title='Send File'
        >
        <hr/>
        <Navigation type='vertical'>
          <Input type='text' label='Partner' name='name' />
          <Input type='file' name='file' icon='file_upload' />
        </Navigation>
        </Dialog>
      </div>
    );
  }
}

module.exports = SendFileDialog;
