'use strict';
require('normalize.css');

import React from 'react';

import {
  Button,
  Col,
  Grid,
  Image,
  Row
} from 'react-bootstrap';

import InputImage from './InputImage';

let inputImage = require('../images/BrainProtonDensitySlice.png')

class Main extends React.Component {
  render() {
    return (
      <div className="app">
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <Image src={inputImage} responsive />
            <h3>Input</h3>
          </Col>
          <Col xs={12} md={6}>
            <InputImage
              src='../images/BrainProtonDensitySlice.png'
              fileName='BrainProtonDensitySlice.png'
              onUpload={ function(file) { console.log('uploaded file', file.name); }}
                />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
          </Col>
          <Col xs={6} md={4}>
            <Button bsStyle="success">Execute</Button>
          </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

Main.defaultProps = {
};

export default Main;
