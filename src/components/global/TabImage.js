import React, { Component } from 'react'

class Avatar extends Component {


  render() {

    const { classWrapper, classImage } = this.props;
    // const data = this.props.menu;
    const data = this.props.lists;

    const list = data.map(id => {
      return (
          <div style={styles.playlistIcon}>
            <p style={styles.playlistText}>List {id}</p>
          </div>
      )
    })
    return list;
  }
}

export default Avatar;

const styles = {
  container: {
    display: 'flex',
  },
  playlistIcon: {
    position: 'relative',
    width: '10rem',
    height: '10rem',
    borderRadius: '50px',
    backgroundColor: 'var(--theme-color)',
    marginRight: '1rem',
    marginBottom: '1rem',
  },
  playlistText: {
    textAlign: 'center',
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '2rem',
    margin: '0',
  }
  
}
