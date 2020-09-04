import React from 'react'
import Button from 'react-bootstrap/Button'
import { BsBagFill } from 'react-icons/bs'

function DisableableButton({ disabled, handleClick, activeText, disabledText, className, block }) {
  return (
    <Button
      className={className}
      variant={disabled ? 'secondary' : 'primary'}
      disabled={disabled}
      onClick={handleClick}
      block={block}
    >
      {disabled ? disabledText : activeText} <BsBagFill size={18} className="ml-3" />
    </Button>
  )
}

export default DisableableButton
