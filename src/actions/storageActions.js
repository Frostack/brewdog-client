import Cookies from 'js-cookie'

import * as types from '../constants/actionTypes'
import api from '../apis/brewdog'
import { removeCartItem, addFavoriteItem, removeFavoriteItem } from '../utils'

export const fetchCartItems = () => async dispatch => {
  const cart = Cookies.get('cart')
  if (!cart) {
    dispatch({ type: types.CART_FETCH_ITEMS, data: [] })
    return
  }
  const requestData = {
    params: {
      ids: cart,
    },
  }
  try {
    const response = await api.get('/beers', requestData)
    dispatch({ type: types.CART_FETCH_ITEMS, data: response.data })
  } catch {}
}

export const fetchFavoriteItems = () => async (dispatch, getState) => {
  const { favorites } = getState().storage
  if (!favorites) {
    dispatch({ type: types.FAVORITES_FETCH, data: [] })
    return
  }
  const requestData = {
    params: {
      ids: favorites.join('|'),
    },
  }
  try {
    const response = await api.get('/beers', requestData)
    dispatch({ type: types.FAVORITES_FETCH, data: response.data })
  } catch {}
}

export const clearCartCache = () => {
  return { type: types.CART_CLEAR_CACHE }
}

export const deleteCartItem = itemID => {
  removeCartItem(itemID)
  return { type: types.CART_DELETE_ITEM, itemID }
}

export const addFavorite = itemID => {
  addFavoriteItem(itemID)
  return { type: types.FAVORITE_ADD, itemID }
}

export const loadFavorites = () => {
  const favorites = Cookies.getJSON('favorites') || []
  return { type: types.FAVORITES_LOAD, data: favorites }
}

export const removeFavorite = itemID => {
  removeFavoriteItem(itemID)
  return { type: types.FAVORITE_REMOVE, itemID }
}
