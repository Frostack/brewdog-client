import _ from 'lodash'

import * as sortTypes from '../constants/sortTypes'

export const sortByType = (sortType, items) => {
  switch (sortType) {
    case sortTypes.ABV_TO_LOW:
      return _.sortBy(items, 'abv').reverse()
    case sortTypes.ABV_TO_HIGH:
      return _.sortBy(items, 'abv')
    case sortTypes.NAME_ASCENDING:
      return _.sortBy(items, 'name')
    case sortTypes.NAME_DESCENDING:
      return _.sortBy(items, 'name').reverse()
    default:
      return items
  }
}

export * from './cartStorage'
export * from './favoriteStorage'
