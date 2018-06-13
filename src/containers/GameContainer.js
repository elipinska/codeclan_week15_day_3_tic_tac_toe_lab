import React, {Component} from 'react'
import Grid from '../components/Grid'

class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 1,
      clickedFields: []
    }

    this.handleFieldClick = this.handleFieldClick.bind(this)
    this.swapPlayer = this.swapPlayer.bind(this)
    this.recordFieldClick = this.recordFieldClick.bind(this)
  }

  swapPlayer() {
    if (this.state.currentPlayer === 1) {
      this.setState({currentPlayer: 2})
    } else {
      this.setState({currentPlayer: 1})
    }
  }

  recordFieldClick(position) {
    const newClick = {
      player: this.state.currentPlayer,
      fieldId: position.fieldId
    }

    const newClickedFields = this.state.clickedFields.concat([newClick])

    this.setState( {
      clickedFields: newClickedFields
    })
  }

  handleFieldClick(position) {
    this.recordFieldClick(position)
    this.swapPlayer();
  }

  render() {
    return (
      <div className="game-container">
        <Grid
          currentPlayer={this.state.currentPlayer}
          handleFieldClick={this.handleFieldClick}
          // clickedFields={this.state.clickedFields}
        />
      </div>

    )
  }


}

export default GameContainer;
