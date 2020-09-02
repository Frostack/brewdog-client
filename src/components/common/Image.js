import React from 'react'

function Image({ src, alt, width, height }) {
  return (
    <div>
      <img src={src} alt={alt} className="image" width={width} height={height} />
    </div>
  )
}

export default Image
