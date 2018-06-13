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
    this.resetGameContainer = this.resetGameContainer.bind(this)
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
      fieldId: position.fieldId,
      position: {
        x: position.x,
        y: position.y
      }
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

  resetGameContainer() {
    window.location.reload()
  }

  render() {
    return (
      <div className="game-container">
        <h1>Player {this.state.currentPlayer}'s turn</h1>
        <Grid
          currentPlayer={this.state.currentPlayer}
          handleFieldClick={this.handleFieldClick}
          // clickedFields={this.state.clickedFields}
        />
        <button onClick={this.resetGameContainer}>Restart</button>
      </div>

    )
  }


}

export default GameContainer;
