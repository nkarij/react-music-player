import React, { Component } from 'react'

class Searchbar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <form style={styles.form}>
          <a style={styles.searchIconWrapper}>
            <i 
            style={styles.searchIcon} 
            className="fas fa-search"></i>
          </a>
          <input style={styles.input} type="search" placeholder="Search in store"></input>
        </form>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '100%',
    marginTop: '2rem',
  },
  form: {
    width: '100%',
    display: 'flex',
    border: '0.2px solid #c4babb',
    borderRadius: '15px',
    backgroundColor: '#f3f3f381',
  },
  input: {
    width: '85%',
    height: '3rem',
    border: 'none',
    color: '#c4babb',
    backgroundColor: '#f3f3f381',
    paddingLeft: '5px',
  },
  searchIconWrapper: {
    display: 'table',
    width: '10%',
    textAlign: 'right',
    height: '3rem',
    // backgroundColor: '#f3f3f381',
  },
  searchIcon: {
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '1.5rem',
    paddingRight: '5px',
    // fontWeight: '500',
    color: '#c4babb',
    // backgroundColor: '#f3f3f381',
    borderRadius: '15px',
  }
  

}

export default Searchbar;
