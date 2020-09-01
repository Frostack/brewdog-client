import React from 'react'
import { connect } from 'react-redux'
import Badge from 'react-bootstrap/Badge'

import { changeSort } from '../../../actions'

function FilterItem({ children, type, changeSort, currentSort }) {
  const disabled = currentSort === type
  const variant = disabled ? 'primary' : 'secondary'

  return (
    <button
      className="normalized-btn p-0 mx-2"
      disabled={disabled}
      onClick={() => changeSort(type)}
    >
      <Badge pill className="px-3 py-2" variant={variant}>
        {children}
      </Badge>
    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterItem)
