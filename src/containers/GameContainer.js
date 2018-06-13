import React, {Component} from 'react'
import Grid from '../components/Grid'

class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 1,
      clickedFields: [],
      turn: 1
    }

    this.handleFieldClick = this.handleFieldClick.bind(this)
    this.swapPlayer = this.swapPlayer.bind(this)
    this.recordFieldClick = this.recordFieldClick.bind(this)
    this.resetGameContainer = this.resetGameContainer.bind(this)
    this.checkForWinner = this.checkForWinner.bind(this)
    this.checkForWinner2 = this.checkForWinner2.bind(this)
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
      clickedFields: newClickedFields,
      turn: this.state.turn + 1
    })

    if (this.state.turn >= 5) {
      this.checkForWinner2(newClick)
    }

  }

  checkForWinner2(lastClick) {
    const winningCombinations = [
      [{x: 1, y: 1},
       {x: 2, y: 1},
       {x: 3, y: 1}
      ],
      [{x: 1, y: 2},
       {x: 2, y: 2},
       {x: 3, y: 2}
     ],
     [
       {x: 1, y: 3},
       {x: 2, y: 3},
       {x: 3, y: 3}
     ],
      [{x: 1, y: 1},
       {x: 1, y: 2},
       {x: 1, y: 3}
      ],
      [{x: 2, y: 1},
       {x: 2, y: 2},
       {x: 2, y: 3}
     ],
     [
       {x: 3, y: 1},
       {x: 3, y: 2},
       {x: 3, y: 3}
     ],
      [{x: 1, y: 1},
       {x: 2, y: 2},
       {x: 3, y: 3}
     ],
     [
       {x: 3, y: 1},
       {x: 2, y: 2},
       {x: 1, y: 3}
     ]
    ]
    const currentPlayerFields = this.state.clickedFields.filter((field) => {
      return field.player === this.state.currentPlayer
    })

    currentPlayerFields.push(lastClick)

    const winner = currentPlayerFields.every((field) => {
      winningCombinations.forEach((winningCombo) => {
        return winningCombo.every((winningField) => {
          return (
            winningField.x === field.position.x && winningField.y == field.position.y
          )
        })
      })
    })

    console.log(winner);

  }

  checkForWinner(lastClick) {

    const x = lastClick.position.x
    const y = lastClick.position.y

    const player = lastClick.player

    const clickedFields = this.state.clickedFields

    let matchCounter = 0

    clickedFields.forEach((field) => {

      if (field.player === player) {
        if ((field.position.x <= x + 2 || field.position.x >= x -2) && field.position.y == y) {
          matchCounter++
          console.log(matchCounter);
          if (matchCounter >= 2) {
            console.log('Game won by player' + player);
          }
        } else if ((field.position.y <= y + 2 || field.position.y >= y -2) && field.position.x == x) {
          matchCounter++
          console.log(matchCounter);
          if (matchCounter >= 2) {
            console.log('Game won by player' + player);
        }
      }
    }
    })
  }


  handleFieldClick(position) {
    this.recordFieldClick(position)
    this.swapPlayer()

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
