import React from 'react'

import CartItem from './CartItem'

function CartList({ items }) {
  const renderItems = () => {
    return items.map(beer => <CartItem key={beer.id} data={beer} />)
  }

  return (
    <div className="h-100" style={{ contain: 'size', overflowY: 'scroll' }}>
      {renderItems()}
    </div>
  )
}

export default CartList
