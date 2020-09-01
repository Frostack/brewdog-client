import React from 'react'
import { connect } from 'react-redux'
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs'

import { ITEMS_PER_PAGE } from '../../../constants'
import { changePage } from '../../../actions'

function ListPagination({ isFirstPage, isLastPage, changePage }) {
  return (
    <div className="ml-auto">
      <button className="mr-4 normalized-btn" disabled={isFirstPage} onClick={() => changePage(-1)}>
        <BsCaretLeftFill size={20} />
      </button>

      <button className="normalized-btn" disabled={isLastPage} onClick={() => changePage(1)}>
        <BsCaretRightFill size={20} />
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isFirstPage: state.search.page === 1 || !state.search.data,
    isLastPage: state.search?.data?.length !== ITEMS_PER_PAGE || !state.search.data,
  }
}

const mapDispatchToProps = {
  changePage,
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPagination)
