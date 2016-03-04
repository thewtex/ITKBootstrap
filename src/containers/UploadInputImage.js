import { connect } from 'react-redux';

import { uploadInputImage } from '../actions';
import { InputImage } from '../components';


const mapStateToProps = (state) => {
  return {
    image: state.image
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
  };
};


const UploadInputImage = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputImage);


export default UploadInputImage;
