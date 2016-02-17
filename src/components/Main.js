require('normalize.css');

import React from 'react';

import {
  Button,
  Col,
  Grid,
  Image,
  Row
} from 'react-bootstrap';

let inputImage = require('../images/BrainProtonDensitySlice.png')

class AppComponent extends React.Component {
  render() {
    return (
      <div className="app">
      <Grid fluid="false">
        <Row>
          <Col xs={12} md={6}>
            <Image src={inputImage} responsive />
            <h3>Input</h3>
          </Col>
          <Col xs={12} md={6}>
            <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
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

AppComponent.defaultProps = {
};

export default AppComponent;
