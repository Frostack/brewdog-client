import React from 'react'

import BeerItem from './BeerItem'
import { NotFound, Loading } from '../../common'

function BeerList({ items, favorites }) {
  const renderItems = () => {
    return items.map(item => {
      const isMarked = favorites.some(itemID => itemID === item.id)
      return <BeerItem key={item.id} data={item} isMarked={isMarked} />
    })
  }

  if (!items) return <Loading />
  if (items.length === 0) return <NotFound />

  return <div className="d-flex flex-wrap justify-content-between">{renderItems()}</div>
}

export default BeerList
