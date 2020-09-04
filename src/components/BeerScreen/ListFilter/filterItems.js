import React from 'react'
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs'

import * as sortTypes from '../../../constants/sortTypes'

const filterItems = [
  {
    type: sortTypes.DEFAULT,
    children: <>default</>,
  },
  {
    type: sortTypes.ABV_TO_HIGH,
    children: (
      <>
        Abv: low to high <BsChevronDoubleUp />
      </>
    ),
  },
  {
    type: sortTypes.ABV_TO_LOW,
    children: (
      <>
        Abv: hight to low <BsChevronDoubleDown />
      </>
    ),
  },
  {
    type: sortTypes.NAME_ASCENDING,
    children: (
      <>
        name: ascending <BsChevronDoubleUp />
      </>
    ),
  },
  {
    type: sortTypes.NAME_DESCENDING,
    children: (
      <>
        name: descending <BsChevronDoubleDown />
      </>
    ),
  },
]

export default filterItems
