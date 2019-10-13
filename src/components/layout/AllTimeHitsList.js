
import React, { Component } from 'react'
import ListItem from './ListItem'

class AllTimeList extends Component {

  state = {
    isLoading: true,
    dataSource: null,
    listTitle: "All time hits",
  }

  componentDidMount() {
    // console.log("all tracks list mounted");  
    return fetch('./Data/songs.json')
    .then((response) => response.json())
    .then((data) => {
        // console.log("inside CDM");
        this.setState({
            isLoading: false,
            dataSource: data,
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
        ((this.state.isLoading === false)? <ListItem data={this.state.dataSource} /> : console.log("fejl i renderview, i allTimeHitsList.js"))
      )
    }
  
  render() {
    return (
      <div 
      // style={}
      >
        {/* heading section */}
        <div style={styles.listHeader}>
          <h4 style={styles.listHeading}>{this.state.listTitle}</h4>
          <span style={styles.listExpandButton}>SEE ALL</span>
        </div>
        <ul className="alltime-list">
          {this.renderView()}
        </ul>
      </div>
    )
  }
}

export default AllTimeList;

const styles = {
  container: {
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
    fontWeight: 'bold',
    fontFamily: 'var(--headingsFont)',
    color: 'var(--theme-color)',
  }
}
