import {
  CART_FETCH_ITEMS,
  CART_CLEAR_CACHE,
  CART_DELETE_ITEM,
  FAVORITE_ADD,
  FAVORITES_LOAD,
  FAVORITE_REMOVE,
} from '../constants/actionTypes'

const INITIAL_STATE = {
  cart: null,
  favorites: [],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_FETCH_ITEMS:
      return { ...state, cart: action.data }
    case CART_CLEAR_CACHE:
      return { ...state, cart: null }
    case CART_DELETE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.itemID),
      }
    case FAVORITE_ADD:
      return { ...state, favorites: [...state.favorites, action.itemID] }
    case FAVORITES_LOAD:
      return { ...state, favorites: action.data }
    case FAVORITE_REMOVE:
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.itemID),
      }
    default:
      return state
  }
}
