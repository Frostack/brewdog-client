import React from 'react'
import { connect } from 'react-redux'

import { hideError } from '../actions'
import { AlertModal } from './common'

function ErrorModal({ show, msg, hideError }) {
  return (
    <AlertModal
      show={show}
      onCloseClick={hideError}
      description={msg}
      variant="danger"
      title="Oops, Something Went Wrong!"
    />
  )
}

const mapStateToProps = state => {
  return {
    show: state.modal.error.show,
    msg: state.modal.error.msg,
  }
}

const mapDispatchToProps = {
  hideError,
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModal)
