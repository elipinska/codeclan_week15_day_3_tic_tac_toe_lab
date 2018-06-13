import React from 'react'
import Field from './Field'

const Grid = (props) => {

  return (
    <div className="grid">
      <div className="row">
        <Field x="1" y="1" onClick={props.handleFieldClick}/>
        <Field x="2" y="1" onClick={props.handleFieldClick}/>
        <Field x="3" y="3" onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field x="1" y="2" onClick={props.handleFieldClick}/>
        <Field x="2" y="2" onClick={props.handleFieldClick}/>
        <Field x="3" y="2" onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field x="1" y="3" onClick={props.handleFieldClick}/>
        <Field x="2" y="3" onClick={props.handleFieldClick}/>
        <Field x="3" y="3" onClick={props.handleFieldClick}/>
      </div>
    </div>

  )
}

export default Grid;
