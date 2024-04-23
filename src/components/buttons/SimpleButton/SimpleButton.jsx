import React from 'react'

import './SimpleButton-Style.css'

const SimpleButton = ({ content, onClick }) => {
  return (
    <button onClick={onClick}>
        {content}
    </button>
  )
}

export default SimpleButton