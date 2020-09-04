import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'

import DropdownFilterItem from './DropdownFilterItem'

function DropdownFilters({ filters }) {
  const renderFilters = () => {
    return filters.map(item => (
      <DropdownFilterItem key={item.type} type={item.type}>
        {item.children}
      </DropdownFilterItem>
    ))
  }

  return <DropdownButton title="Sort By">{renderFilters()}</DropdownButton>
}

export default DropdownFilters
