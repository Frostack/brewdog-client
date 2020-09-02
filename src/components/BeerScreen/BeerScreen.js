import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { sortByType } from '../../utils'
import { loadFavorites } from '../../actions'
import { fetchBeers, clearBeersCache, resetPage, fetchFavoriteItems } from '../../actions'
import ListFilter from './ListFilter/ListFilter'
import BeerList from './BeerList/BeerList'

function BeerScreen({
  match,
  fetchBeers,
  clearBeersCache,
  resetPage,
  items,
  currentPage,
  sortType,
  fetchFavoriteItems,
  loadFavorites,
  favorites,
}) {
  useEffect(() => {
    resetPage()
    loadFavorites()
  }, [resetPage, loadFavorites, match.path])

  useEffect(() => {
    switch (match.path) {
      case '/pizzas':
        fetchBeers(currentPage, 'pizza')
        break
      case '/steaks':
        fetchBeers(currentPage, 'steak')
        break
      case '/favorites':
        fetchFavoriteItems()
        break
      default:
        fetchBeers(currentPage)
    }
    return clearBeersCache
  }, [fetchBeers, clearBeersCache, fetchFavoriteItems, loadFavorites, match.path, currentPage])

  const sortedItems = sortByType(sortType, items)

  return (
    <div className="px-5">
      <div className="mt-5 pt-2" />
      <ListFilter />
      <BeerList items={sortedItems} favorites={favorites} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    favorites: state.storage.favorites,
    items: state.search.data,
    currentPage: state.search.page,
    sortType: state.search.sortType,
  }
}

const mapDispatchToProps = {
  fetchBeers,
  clearBeersCache,
  resetPage,
  fetchFavoriteItems,
  loadFavorites,
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerScreen)
