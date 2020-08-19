import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadFavorites } from '../../actions';
import { fetchBeers, clearBeersCache, resetPage, fetchFavoriteItems } from '../../actions';
import ListFilter from './ListFilter/ListFilter';
import BeerList from './BeerList/BeerList';

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
}) {
  useEffect(() => {
    resetPage();
  }, [resetPage, match.path]);

  useEffect(() => {
    switch (match.path) {
      case '/pizzas':
        fetchBeers(currentPage, 'pizza');
        break;
      case '/steaks':
        fetchBeers(currentPage, 'steak');
        break;
      case '/favorites':
        loadFavorites();
        fetchFavoriteItems();
        break;
      default:
        fetchBeers(currentPage);
    }
    return clearBeersCache;
  }, [fetchBeers, clearBeersCache, fetchFavoriteItems, loadFavorites, match.path, currentPage]);

  return (
    <div className="px-5">
      <div className="mt-5 pt-2" />
      <ListFilter />
      <BeerList items={items} sortType={sortType} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    items: state.search.data,
    currentPage: state.search.page,
    sortType: state.search.sortType,
  };
};

const mapDispatchToProps = {
  fetchBeers,
  clearBeersCache,
  resetPage,
  fetchFavoriteItems,
  loadFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerScreen);
