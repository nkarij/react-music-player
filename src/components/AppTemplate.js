import React, { Component } from 'react'
import Header from './components/global/Header'


class App extends Component {

  render() {
    return (
      <div style={styles.container}>
        <header className="App-header">
          <p>Edit </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > Learn React here!
          </a>
        </header>
      </div>
    )
  }
}

export default App;


const styles = {
  container: {
    display: 'block',
    width: '100%'
  },
  form: {
    display: 'inline-block',
    // border: '1px solid yellow',
  },

}
