import React, { Component } from 'react'
import Header from './components/global/Header'
import Playlist from './components/layout/Playlist'

class PlayList extends Component {

  render() {
    return (
      <div style={styles.container}>
          <Header heading={"Playlist"} />
          <Playlist />
      </div>
    )
  }
}

export default PlayList;

const styles = {
  container: {
    display: 'block',
    padding: '2.3rem'
  },
}

