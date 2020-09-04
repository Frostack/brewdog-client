import React from 'react'

import { useFilterItem } from '../../../../hooks'
import Dropdown from 'react-bootstrap/Dropdown'

function DropdownFilterItem({ children, type }) {
  const { disabled, onItemClick } = useFilterItem(type)

  return (
    <Dropdown.Item active={disabled} onClick={onItemClick}>
      {children}
    </Dropdown.Item>
  )
}

export default DropdownFilterItem
