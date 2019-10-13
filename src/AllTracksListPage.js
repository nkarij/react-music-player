import React, { Component } from 'react'
import Header from './components/global/Header'
import AllTracksList from './components/layout/AllTracksList'

class AllTracks extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Header heading={"All Tracks"} />
        <AllTracksList />
      </div>
    )
  }
}

export default AllTracks;


const styles = {
  container: {
    display: 'block',
    padding: '2.3rem',
  },
}
