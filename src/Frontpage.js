import React, { Component } from 'react'
import Header from './components/global/Header'
import Searchbar from './components/global/SearchBar'
import TopPlayer from './components/layout/TopPlayersList'
import AllTimeHits from './components/layout/AllTimeHitsList'

class App extends Component {

  render() {
    return (
      <div style={styles.container} className="App">
        <Header heading={"Browse"} />
        <Searchbar />
        <TopPlayer />
        <AllTimeHits />
      </div>
    )
  }
}

export default App;

const styles = {
  container: {
    display: 'block',
    padding: '2.3rem',
    marginBottom: '7rem',
  }
}