'use strict';

import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

require('styles/FileInputButton.css');


const InputImage = React.createClass({
  handleChange: (event) => {
    this.props.onUpload(event.target.files[0]);
  },

  render: function() {
    return (
    <div className="panel panel-default">
      <div className="panel-heading">Input Image</div>
      <div className="panel-body">
        <div className="center-block"><Image src={this.props.src} responsive /></div>
      </div>
      <div className="panel-footer">
        {this.props.fileName}
        <span className="btn btn-default btn-file">
          Upload <input type="file" name="files[]" accept=".png" onChange={ this.handleChange } />
        </span>
      </div>
    </div>
    );
  }
});

InputImage.propTypes = {
  src: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired
};

export default InputImage;
