import React, { Component } from 'react'
import PlayListItem from './PlaylistItem'

class AllTracksList extends Component {

  // constructor with state.
  constructor(props){
    super(props);

    this.state = { 
        isLoading: true,
        dataSource: null,
    }
    // This is the approach currently recommended in the React docs:
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // console.log("all tracks list mounted");  
    return fetch('./Data/songs.json')
    .then((response) => response.json())
    .then((data) => {
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
        ((this.state.isLoading === false)? <PlayListItem data={this.state.dataSource} /> : console.log("fejl i renderview, i alltrackslist.js"))
      )
    }

  render() {
    return (
      <div style={styles.container}>
        <ul>
          {this.renderView()}
        </ul>
      </div>
    )
  }
}

export default AllTracksList;

const styles = {
  container: {
    display: 'block',
    // border: '1px solid blue',
    margin: '4rem 0 0 0',
  },  
  flexrow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}
