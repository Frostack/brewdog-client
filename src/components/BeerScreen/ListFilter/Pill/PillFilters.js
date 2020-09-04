import React from 'react'

import PillFilterItem from './PillFilterItem'

function PillFilters({ filters }) {
  const renderFilters = () => {
    return filters.map(item => (
      <PillFilterItem key={item.type} type={item.type} PillFilterItem>
        {item.children}
      </PillFilterItem>
    ))
  }

  return (
    <>
      <span className="mr-3">Sort by</span>
      {renderFilters()}
    </>
  )
}

export default PillFilters
