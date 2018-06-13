import React from 'react'
import Field from './Field'

const Grid = (props) => {

  return (
    <div className="grid">
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="1"
          x="1"
          y="1"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="2"
          x="2"
          y="1"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="3"
          x="3"
          y="1"
          winner={props.winner}
          onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="4"
          x="1"
          y="2"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="5"
          x="2"
          y="2"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="6"
          x="3"
          y="2"
          winner={props.winner}
          onClick={props.handleFieldClick}/>
      </div>
      <div className="row">
        <Field
          currentPlayer={props.currentPlayer}
          fieldId="7"
          x="1"
          y="3"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="8"
          x="2"
          y="3"
          winner={props.winner}
          onClick={props.handleFieldClick}/>

        <Field
          currentPlayer={props.currentPlayer}
          fieldId="9"
          x="3"
          y="3"
          winner={props.winner}
          onClick={props.handleFieldClick}/>
      </div>
    </div>

  )
}

export default Grid;
