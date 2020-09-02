import React from 'react'
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs'

import * as sortTypes from '../../../constants/sortTypes'
import ListFilterItem from './ListFilterItem'
import ListPagination from './ListPagination'

function ListFilter() {
  return (
    <div className="py-4 d-flex align-items-center">
      <span className="mr-3">Sort by</span>

      <ListFilterItem type={sortTypes.DEFAULT}>default</ListFilterItem>
      <ListFilterItem type={sortTypes.ABV_TO_HIGH}>
        Abv: low to high <BsChevronDoubleUp />
      </ListFilterItem>
      <ListFilterItem type={sortTypes.ABV_TO_LOW}>
        Abv: hight to low <BsChevronDoubleDown />
      </ListFilterItem>
      <ListFilterItem type={sortTypes.NAME_ASCENDING}>
        name: ascending <BsChevronDoubleUp />
      </ListFilterItem>
      <ListFilterItem type={sortTypes.NAME_DESCENDING}>
        name: descending <BsChevronDoubleDown />
      </ListFilterItem>

      <ListPagination />
    </div>
  )
}

export default ListFilter
