
import React, { Component } from 'react'
import Header from './components/global/Header'
import DisplaySong from './components/layout/DisplaySong'
import VolumeControle from './components/layout/VolumeControl'

class Player extends Component {

  constructor(props){
    super(props);

    this.state = { 
        isLoading: true,
        dataSource: null,
    }
  }

  componentDidMount() {

    const passedData = this.props.location.state;
    // console.log(passedData.source);

    return fetch('./Data/songs.json')
    .then((response) => response.json())
    .then((data) => {
        this.setState({
            dataSource: data,
            trackID: passedData.songid,
            trackSource: passedData.source,
        }, function(){
            // console.log(this.state.trackSource);
            this.state.dataSource.map(song => {
              // NB DER KAN VÆRE FORSKEL I DATATYPER, DERFOR 2X=
              if(song.id == this.state.trackID) {
                this.setState({
                   trackData: song,
                   isLoading: false,
                }) 
                // console.log(this.state.trackData);
              }
            });
            // måske mangler der noget her?
        });
    })
    .catch((error) =>{
        console.error(error);
    });
  }


  renderDisplaySong = () => {
    return (
    ((this.state.isLoading === false)? <DisplaySong key={1} data={this.state.trackData}/> : console.log("fejl i Player.js"))
    )
  }

  
  renderVolumeControle = () => {
    return (
    ((this.state.isLoading === false)? <VolumeControle key={2} source={this.state.trackData}/> : console.log("fejl i Player.js"))
    )
  }

  
  render() {
    return (
      <div style={styles.container}>
        <Header heading={"Playlist"} />
        {this.renderDisplaySong()}
        {this.renderVolumeControle()}
      </div>
    )
  }
}

export default Player;

const styles = {
  container: {
    display: 'block',
    padding: '2.3rem',
    // marginBottom: '7rem',
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
    color: 'var(--theme-color)',
  }
}
