'use strict';

import React, { PropTypes } from 'react';
import { Image } from 'react-bootstrap';

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


const PNGInputImage = React.createClass({
  render: function() {
    return (
      <Image src={binaryToPng(this.props.image)} responsive /></div>
    );
  }
});

PNGInputImage.propTypes = {
  // TODO: image is required instead of src
  image: PropTypes.string.isRequired,
};

export default PNGInputImage;
