import React from 'react'

function LabeledText({ label, text }) {
  return (
    <div className="ml-lg-5 pl-2">
      <strong className="mr-4">{label}</strong>
      <span>{text}</span>
    </div>
  )
}

export default LabeledText
