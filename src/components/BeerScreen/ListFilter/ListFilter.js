import React from 'react';
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs';

import * as sortTypes from '../../../constants/sortTypes';
import FilterItem from './FilterItem';
import ListPagination from './ListPagination';

function ListFilter({ changeSort, currentSort }) {
  return (
    <div className="py-4 d-flex align-items-center">
      <span className="mr-3">Sort by</span>

      <FilterItem type={sortTypes.DEFAULT}>default</FilterItem>
      <FilterItem type={sortTypes.ABV_TO_HIGH}>
        Abv: low to high <BsChevronDoubleUp />
      </FilterItem>
      <FilterItem type={sortTypes.ABV_TO_LOW}>
        Abv: hight to low <BsChevronDoubleDown />
      </FilterItem>
      <FilterItem type={sortTypes.NAME_ASCENDING}>
        name: ascending <BsChevronDoubleUp />
      </FilterItem>
      <FilterItem type={sortTypes.NAME_DESCENDING}>
        name: descending <BsChevronDoubleDown />
      </FilterItem>

      <ListPagination />
    </div>
  );
}

export default ListFilter;
