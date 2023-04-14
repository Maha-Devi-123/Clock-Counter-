import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {clockStatus: false}

  chnageButtonText = () => {
    const {clockStatus} = this.state
    this.setState({clockStatus: !clockStatus})
  }

  render() {
    const {clockStatus} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.chnageButtonText}
          type="button"
          className="toggle-button"
        >
          {clockStatus ? 'Hide Clock' : 'Show Clock'}
        </button>
        {clockStatus && <Clock date="2023-04-14" />}
      </div>
    )
  }
}

export default App
