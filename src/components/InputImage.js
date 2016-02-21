//'use strict';

import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

const InputImage = ({ src, fileName, onUpload }) => (
  <div className="panel panel-default">
    <div className="panel-heading">Input Image</div>
    <div className="panel-body">
      <div className="center-block"><Image src={src} responsive /></div>
    </div>
    <div className="panel-footer">{fileName}</div>
  </div>
);

InputImage.propTypes = {
  src: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  onUpload: PropTypes.func.isRequired
};

export default InputImage;
