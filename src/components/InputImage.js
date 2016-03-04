'use strict';

import React, { PropTypes } from 'react';
import PNGImage from './PNGInputImage';

require('styles/FileInputButton.css');


/** Convert binary PNG image data to a PNG that can be displayed on the page.
 * */
const binaryToPng = function(binaryData) {
  try {
    var blob = new Blob([binaryData], {"type": "image\/png"});
    window.URL = window.URL || window.webkitURL;
    return window.URL.createObjectURL(blob);
  } catch (err) { // in case blob / URL missing, fallback to data-uri
    var rawString = '';
    for(var i = 0; i < binaryData.length; ++i) {
      rawString += String.fromCharCode(binaryData[i]);
    }
    return 'data:image\/png;base64,' + btoa(rawString);
  }
};


const InputImage = React.createClass({
  handleChange: function(event) {
    this.props.onUpload(event.target.files[0]);
  },

  render: function() {
    return (
    <div className="panel panel-default">
      <div className="panel-heading">Input Image</div>
      <div className="panel-body">
        <div className="center-block"><PNGInputImage image={this.props.image} responsive /></div>
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
  // TODO: image has a better type specification
  image: PropTypes.object.isRequired,
  fileName: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired
};

export default InputImage;
