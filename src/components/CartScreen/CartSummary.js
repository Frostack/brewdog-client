import React from 'react'

import { PriceTag } from '../common'

function CartSummary({ totalPrice }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
      <h1 className="display-1 mb-5">Total</h1>
      <h2>
        <PriceTag price={totalPrice} />
      </h2>
    </div>
  )
}

export default CartSummary
