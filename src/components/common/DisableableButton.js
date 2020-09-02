import React from 'react'
import Button from 'react-bootstrap/Button'
import { BsBagFill } from 'react-icons/bs'

function DisableableButton({ disabled, handleClick, activeText, disabledText }) {
  return (
    <Button
      className="d-flex align-items-center ml-5"
      variant={disabled ? 'secondary' : 'primary'}
      disabled={disabled}
      onClick={handleClick}
    >
      {disabled ? disabledText : activeText} <BsBagFill size={18} className="ml-3" />
    </Button>
  )
}

export default DisableableButton
