import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

function LearnMoreButton({ onClick }) {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <u>Learn more</u>
      <BsArrowRightShort className="ml-2" size={24} />
    </div>
  )
}

export default LearnMoreButton
