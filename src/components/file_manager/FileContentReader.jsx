import ReactFileReader from 'react-file-reader';
import { Button } from 'react-toolbox';
import React, { Component } from 'react';

class FileContentReader extends Component {

	handleFiles = files => {
		let self = this;
    let reader = new FileReader();
  	reader.onload = function(e) {
  		self.props.handleFile(files[0], reader.result);
  	}
    reader.readAsText(files[0]);
  }

	render () {
    return (
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={['.json', '.xml']}>
        <Button icon='file_upload' label='Upload' raised primary />
      </ReactFileReader>
    );
  }

}

module.exports = FileContentReader;