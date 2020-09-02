import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

function Heart({ marked, onClick }) {
  if (marked) {
    return (
      <BsHeartFill
        size={20}
        className="cursor-pointer flex-shrink-0 text-danger"
        onClick={onClick}
      />
    )
  }
  return <BsHeart size={20} className="cursor-pointer flex-shrink-0" onClick={onClick} />
}

export default Heart
