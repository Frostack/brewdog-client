import React from 'react'
import Badge from 'react-bootstrap/Badge'

function PillButton({ children, disabled, onClick }) {
  const variant = disabled ? 'primary' : 'secondary'

  return (
    <button className="normalized-btn p-0 mx-2" disabled={disabled} onClick={onClick}>
      <Badge pill className="px-3 py-2" variant={variant}>
        {children}
      </Badge>
    </button>
  )
}

export default PillButton
