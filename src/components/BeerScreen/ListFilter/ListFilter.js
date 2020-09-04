import React from 'react'

import filterItems from './filterItems'
import { useDeviceSize } from '../../../hooks'
import ListPagination from './ListPagination'
import PillFilters from './Pill/PillFilters'
import DropdownFilters from './Dropdown/DropdownFilters'

function ListFilter() {
  const deviceSize = useDeviceSize()

  const renderItems = () => {
    if (deviceSize === 'EXTRA_LARGE' || deviceSize === 'LARGE') {
      return <PillFilters filters={filterItems} />
    }
    return <DropdownFilters filters={filterItems} />
  }

  return (
    <div className="py-4 d-flex align-items-center">
      {renderItems()}

      <ListPagination />
    </div>
  )
}

export default ListFilter
