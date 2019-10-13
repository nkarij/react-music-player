import React, { Component } from 'react'
import FavItem from './FavItem'
import TabImage from '../global/TabImage'

class FavPlayers extends Component {

  constructor(props){
    super(props);
    this.id = 1;
    this.count = 1;
    this.localStorage = [];
    this.listArray = [1];
  }

  state = {
    classnameWrapper: "playlist__imagewrap",
    classnameImage: "playlist__image",
    isLoading: true,
    count: 1,
    listArray: [1],
  }

  componentDidMount() {
    if(localStorage.getItem("favs")){
        let temp = JSON.parse(localStorage.getItem("favs"));
        this.localStorage = temp;
        this.setState({
          isLoading: false,
        })
    } 
  }

  addList = () => {
    this.listArray.push(this.id);
    this.setState({
      count: this.count+=1,
      listArray: this.listArray
    })
  }

  renderSong = () => {
    return (
        ((this.state.isLoading === false)? <FavItem data={this.localStorage} /> : console.log("fejl i playlist.js, i topplayerlist.js"))
      )
  }

  renderLists = () => {
    if(this.state.listArray) {
      return( <TabImage
      lists={this.state.listArray}
      />
      )
    }
  }

  render() {
      return (
        <div style={styles.container}>
          <div>
            <div style={styles.flexrow}>
              {this.renderLists()}
            </div>
            <div style={styles.getButton}
              onClick={
                (e) => {
                  this.id+=1;
                  this.addList();
                  this.renderLists();
                }

              }>
              <a style={styles.getLink}>New List</a>
            </div>
          </div>
          <ul style={styles.marginTop}>
            {this.renderSong()}
          </ul>
        </div>
      )
  }
}

export default FavPlayers;

const styles = {
  container: {
    display: 'block',
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
    fontWeight: 'bold',
    fontFamily: 'var(--headingsFont)',
    color: 'var(--theme-color)',
  },
  flexrow: {
    display: 'flex',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  marginTop: {
    marginTop: '3rem',
  },  
  getButton: {
    display: 'table',
    height: '2rem',
    width: '10rem',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--theme-color)',
    borderRadius: '15px',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  getLink: {
    display: 'table-cell',
    fontFamily: 'var(--sansSerifFont)',
    fontSize: '1.2rem',
    letterSpacing: '1px',
    fontWeight: 'bold',
    color: 'white',
    verticalAlign: 'middle',
  },
}
