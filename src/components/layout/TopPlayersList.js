
import React, { Component } from 'react'
import TopItem from './TopPlayerItem'

class TopPlayers extends Component {

  state = {
    listTitle: "Top of the week",
    isLoading: true,
    dataSource: null,
  }

  componentDidMount() {
    return fetch('./Data/songs.json')
    .then((response) => response.json())
    .then((data) => {
        this.setState({
            isLoading: false,
            dataSource: data.slice(0, 3),
        }, function(){
            // console.log(this.state.dataSource);
        });
    })
    .catch((error) =>{
        console.error(error);
    });
  }

  renderView = () => {
    return (
        ((this.state.isLoading === false)? <TopItem data={this.state.dataSource} /> : console.log("fejl i renderview, i topplayerlist.js"))
      )
  }

  render() {
    return (
      <div style={styles.container}>
        {/* heading section */}
        <div style={styles.listHeader}>
          <h4 style={styles.listHeading}>{this.state.listTitle}</h4>
          <span style={styles.listExpandButton}>SEE ALL</span>
        </div>
        <ul className="top-list">
          {this.renderView()}
        </ul>
      </div>
    )
  }
}

export default TopPlayers;

const styles = {
  container: {
    display: 'block',
    width: '100%',
    // border: '1px solid blue',
    margin: '2rem 0',
  },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listHeading: {
    fontSize: '1.5rem',
  },
  listExpandButton: {
    fontSize: '1.5rem',
    fontFamily: 'var(--headingsFont)',
    fontWeight: 'bold',
    color: 'var(--theme-color)'
  }
}
