import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'

class NavBar extends Component {

  render() {
    return (
      <div>
          <nav style={styles.container} className="Nav">
              <ul style={{...styles.flexrow,...styles.menulist}} className="Nav__menulist">
                  <li className="Nav__menulist-item">
                    <NavLink to="/home"
                      className="Nav__menulink">
                      <i style={styles.menuicon} className="fas fa-home"></i>
                    </NavLink>
                  </li>
                  <li className="Nav__menuitem">
                      <NavLink to="https://www.google.dk/" 
                      className="Nav__menulink">
                        <i style={styles.menuicon} className="fab fa-chrome"></i>
                      </NavLink>
                  </li>
                  <li className="Nav__menulist-item">
                  <NavLink to={{
                      pathname: '/player',
                      state: {
                        songid: 1,
                        source: './Audio/dirt-rhodes-by-kevin-macleod.mp3',
                      }
                    }} 
                    className="Nav__menulink">
                        <i style={styles.menuicon} className="fas fa-music"></i>
                    </NavLink>
                  </li>
                  <li className="Nav__menulist-item">
                    <NavLink to="/playlist" 
                    className="Nav__menulink">
                        <i style={styles.menuicon} className="fas fa-star"></i>
                    </NavLink>
                  </li>
                  <li className="Nav__menulist-item">
                    <NavLink to="/all" 
                      className="Nav__menulink">
                        <i style={styles.menuicon} className="fas fa-th-list"></i>
                    </NavLink>
                  </li>
              </ul>
          </nav>

      </div>
    )
  }
}

export default NavBar;

// 255 64 97

const styles = {
  container: {
    width: '100%',
    height: '80px',
    backgroundColor: '#ff4061',
    position: 'fixed',
    left: '0',
    bottom: '0',
    marginTop: '80px'
  },
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  menulist: {
    width: '100%',
    height: '100%',
    margin: '0',
  },
  // listitem: {}
  // menulink: {
  //   textDecoration: 'none',
  //   color: 'white',
  //   opacity: '0.5',
  // },
  menuicon: {
    fontSize: '20px',
  },
  // active: {
  //   opacity: '1',
  // }
}