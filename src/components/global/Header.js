import React, { Component } from 'react'

class Header extends Component {

  state = {
    avatar: './IMG/profilepic.jpg'
  }

  render() {

    const heading = this.props.heading;

    return (
      <div className="App">
      <header style={styles.container} className="App-header">
        <h1 className="header__heading">{heading}</h1>
        <div style={styles.avatarWrapper}>
          <img style={styles.avatar} src={this.state.avatar}></img>
        </div>
      </header>
    </div>
    )
  }
}

export default Header;

const styles = {

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',   
    // border: '1px solid red',
  },

  avatarWrapper: {
    width: '4.5rem',
    height: '4.5rem',
    
  },

  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50px',
  },
}