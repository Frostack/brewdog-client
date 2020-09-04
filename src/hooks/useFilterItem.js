import { useSelector, useDispatch } from 'react-redux'

import { changeSort } from '../actions'

const useFilterItem = type => {
  const dispatch = useDispatch()
  const currentSort = useSelector(state => state.search.sortType)
  const onItemClick = () => dispatch(changeSort(type))
  const disabled = currentSort === type

  return {
    disabled,
    onItemClick,
  }
}

export default useFilterItem
