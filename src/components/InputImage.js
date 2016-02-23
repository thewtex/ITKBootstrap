'use strict';

import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

require('styles/FileInputButton.css');

const InputImage = React.createClass({
  handleChange: function(event) {
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
        <form className="form-horizontal">
        <div className="form-group">
          <label className="col-sm-2 control-label">{this.props.fileName}</label>
          <div className="col-sm-10">
          <span className="btn btn-primary btn-file pull-right">
            Upload <input id="inputImageUpload" type="file" name="files[]" accept=".png" onChange={ this.handleChange } />
          </span>
          </div>
        </div>
        </form>
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
