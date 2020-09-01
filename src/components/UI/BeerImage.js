import React from 'react'

function BeerImage({ src, alt, width, height }) {
  return <img src={src} alt={alt} className="image" width={width} height={height} />
}

export default BeerImage
