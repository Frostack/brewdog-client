import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { BsX } from 'react-icons/bs'

function AlertModal({ show, onCloseClick, description, variant, title }) {
  return (
    <Alert show={show} variant={variant} className="fixed-bottom m-0">
      <Alert.Heading className="d-flex justify-content-between">
        {title}
        <BsX className="cursor-pointer" onClick={onCloseClick} />
      </Alert.Heading>
      <p>{description}</p>
    </Alert>
  )
}

export default AlertModal
