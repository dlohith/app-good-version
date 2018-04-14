import React, { Component } from 'react';
import { Dialog, BrowseButton, Button, Input, Navigation } from 'react-toolbox';
import ReactFileReader from 'react-file-reader';
import FileContentReader from '../file_manager/FileContentReader';
import { parseString } from 'xml2js'
import axios from 'axios';

class SendFileDialog extends Component {

  state = {
    active: this.props.show
  };

  handleFile (fileHandle, fileTextContent) {
    let self = this;
    parseString(fileTextContent, function(error, result) {
      if(error) {
        console.log("Parse error : ", error);
        return;
      }
      let jsonContent = JSON.stringify(result, null, 2);
      console.log("xml2js : ", jsonContent);

      fetch('http://localhost:8500/bzz:/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: jsonContent,
        mode: 'no-cors'
      }).then(function(response) {
        console.log("swarm response : ", response);
      })
    });
  }

  uploadFileToSwarm (fileJSONContent) {
    axios.post('http://localhost:8500/bzz:/', fileJSONContent)
    .then(function (response) {
      console.log("Success, check the hash: ", response);
    })
    .catch(function (error) {
      console.log("Error :  ", response);
    });
    
  }

  actions = [
    
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
          <FileContentReader handleFile={ this.handleFile }/>
        </Navigation>
        </Dialog>
      </div>
    );
  }
}

module.exports = SendFileDialog;
