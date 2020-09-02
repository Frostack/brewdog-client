import React from 'react'
import Modal from 'react-bootstrap/Modal'

function CustomModal({ children, show, onHide, title, tagline }) {
  return (
    <Modal size="lg" show={show} centered onHide={onHide}>
      <Modal.Header closeButton className="bg-light d-flex align-items-center px-4">
        <Modal.Title>{title}</Modal.Title>
        <div className="ml-5 text-secondary">{tagline}</div>
      </Modal.Header>

      <Modal.Body className="p-0">{children}</Modal.Body>
    </Modal>
  )
}

export default CustomModal
