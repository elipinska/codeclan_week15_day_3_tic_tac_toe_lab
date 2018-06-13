import React, {Component} from 'react'
import Grid from '../components/Grid'

class GameContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }

    this.handleFieldClick = this.handleFieldClick.bind(this)
  }

  handleFieldClick(position) {
    console.log(position);
  }

  render() {
    return (
      <div className="game-container">
        <Grid handleFieldClick={this.handleFieldClick}/>
      </div>

    )
  }


}

export default GameContainer;
