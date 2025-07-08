import React from 'react'

const WaterDrop = ({ className = '', style = {} }) => {
  return (
    <div 
      className={`water-drop ${className}`}
      style={style}
      aria-hidden="true"
    />
  )
}

export default WaterDrop 