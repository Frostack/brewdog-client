import React from 'react'
import { connect } from 'react-redux'

import { changeSort } from '../../../actions'
import { PillButton } from '../../common'

function ListFilterItem({ children, type, currentSort, changeSort }) {
  const disabled = currentSort === type

  return (
    <PillButton disabled={disabled} onClick={() => changeSort(type)}>
      {children}
    </PillButton>
  )
}

const mapStateToProps = state => {
  return {
    currentSort: state.search.sortType,
  }
}

const mapDispatchToProps = {
  changeSort,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListFilterItem)
