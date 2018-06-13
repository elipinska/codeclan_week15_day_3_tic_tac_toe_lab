import React from 'react'

const Field = (props) => {

  const handleFieldValue = () => {
    const position = {
      x: props.x,
      y: props.y
    }

    props.onClick(position);
  }

  return (
    <div className="field" onClick={handleFieldValue}>

    </div>

  )
}

export default Field
