import React from 'react'

function Image({ src, alt, width, height, className }) {
  return (
    <div className={className}>
      <img src={src} alt={alt} className="image" width={width} height={height} />
    </div>
  )
}

export default Image
