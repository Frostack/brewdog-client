import * as types from '../constants/actionTypes'
import { ITEMS_PER_PAGE } from '../constants'
import api from '../apis/brewdog'

export const fetchBeers = (page, food) => async dispatch => {
  const requestData = {
    params: {
      page,
      food,
      per_page: ITEMS_PER_PAGE,
    },
  }
  try {
    const response = await api.get('/beers', requestData)
    dispatch({ type: types.BEERS_FETCH, data: response.data })
  } catch {}
}

export const clearBeersCache = () => {
  return { type: types.CLEAR_BEERS_CACHE }
}

export const changePage = amount => {
  return { type: types.PAGE_CHANGE, amount }
}

export const resetPage = () => {
  return { type: types.PAGE_RESET }
}

export const changeSort = sortType => {
  return { type: types.SORT_CHANGE, sortType }
}
