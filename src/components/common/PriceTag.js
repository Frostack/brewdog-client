import React from 'react'

function PriceTag({ price }) {
  const renderedPrice = price || 0
  return <div className="text-success font-weight-bolder">{renderedPrice.toFixed(2)}$</div>
}

export default PriceTag
