import _ from 'lodash'
import React from 'react'

import * as sortTypes from '../../../constants/sortTypes'
import BeerItem from './BeerItem'
import NotFound from '../../UI/NotFound'
import Loading from '../../UI/Loading'

function BeerList({ items, sortType }) {
  const renderItems = () => {
    let beers
    switch (sortType) {
      case sortTypes.ABV_TO_LOW:
        beers = _.sortBy(items, 'abv').reverse()
        break
      case sortTypes.ABV_TO_HIGH:
        beers = _.sortBy(items, 'abv')
        break
      case sortTypes.NAME_ASCENDING:
        beers = _.sortBy(items, 'name')
        break
      case sortTypes.NAME_DESCENDING:
        beers = _.sortBy(items, 'name').reverse()
        break
      default:
        beers = items
    }
    return beers.map(beer => <BeerItem key={beer.id} data={beer} />)
  }

  if (!items) return <Loading />
  if (items.length === 0) return <NotFound />

  return <div className="d-flex flex-wrap justify-content-between">{renderItems()}</div>
}

export default BeerList
