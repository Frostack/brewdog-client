import React from 'react';
import { connect } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import { BsX } from 'react-icons/bs';

import { hideError } from '../../../actions';

function ErrorModal({ show, msg, hideError }) {
  return (
    <Alert show={show} variant="danger" className="fixed-bottom m-0">
      <Alert.Heading className="d-flex justify-content-between">
        Oops, Something Went Wrong!
        <BsX onClick={() => hideError()} />
      </Alert.Heading>
      <p>{msg}</p>
    </Alert>
  );
}

const mapStateToProps = state => {
  return {
    show: state.modal.error.show,
    msg: state.modal.error.msg,
  };
};

const mapDispatchToProps = {
  hideError,
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal);
