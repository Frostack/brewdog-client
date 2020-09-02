import React from 'react'

function Description({ text }) {
  return (
    <div className="text-secondary line-clamp overflow-hidden">
      <small>{text}</small>
    </div>
  )
}

export default Description
