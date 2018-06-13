import React, {Component} from 'react'


class Field extends Component {

  constructor(props) {
    super(props)
    this.state = {
      player: ''
    }

    this.handleFieldValue = this.handleFieldValue.bind(this)
    this.checkIfClicked = this.checkIfClicked.bind(this)
  }

  handleFieldValue() {
    const position = {
      x: this.props.x,
      y: this.props.y,
      fieldId: this.props.fieldId
    }

    this.props.onClick(position);
  }

  checkIfClicked() {

    this.props.clickedFields.forEach((field) => {
      if (field.fieldId == this.props.fieldId) {
        this.setState({player: field.player})
      }
    })
  }

  componentWillMount() {
    this.checkIfClicked()
  }


  render() {

    return (
      <div className={`field ${this.state.player}`} onClick={this.handleFieldValue}>

      </div>

    )
  }

}


export default Field
