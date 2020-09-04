import React from 'react'

import { useFilterItem } from '../../../../hooks'
import { PillButton } from '../../../common'

function PillFilterItem({ children, type }) {
  const { disabled, onItemClick } = useFilterItem(type)

  return (
    <PillButton disabled={disabled} onClick={onItemClick}>
      {children}
    </PillButton>
  )
}

export default PillFilterItem
