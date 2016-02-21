/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

import React from 'react';

import createComponent from 'helpers/shallowRenderHelper';

import InputImage from 'components/InputImage';

describe('InputImageComponent', () => {
  let InputImageComponent;

  beforeEach(() => {
    InputImageComponent = createComponent(InputImage,
                              { src: '../images/BrainProtonDensitySlice.png',
                                fileName: 'BrainProtonDensitySlice.png',
                                onUpload: () => { console.log('Upload occured'); }
                              }
                            );
  });

  it('should render correctly', () => {
    expect(InputImageComponent.props.className).to.equal('panel panel-default');
    let [ heading, body, footer ] = InputImageComponent.props.children;
    expect(heading.props.className).to.equal('panel-heading');
    expect(body.props.className).to.equal('panel-body');
    expect(footer.props.className).to.equal('panel-footer');
  });
});
