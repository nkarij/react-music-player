import React, { Component } from 'react'


class ListItem extends Component {

  state = {
    selectedTrack: null,
    selectedSource: null,
    playerState: "stopped",
  }

  componentDidUpdate(prevState) {
    if(this.state.selectedTrack !== null) {
      let track;
      track = this.state.selectedSource;
      if(track) {
        this.player.src = track;
        if(this.state.playerState == "playing") {
          this.player.play();           
        } 
        if(this.state.playerState == "stopped") {
          this.player.pause();
          this.player.currentTime = 0;
          this.setState({
            selectedTrack: null,
            selectedSource: null,
        })
        }
      }
    }
    if(this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      track = this.state.selectedSource;
      if(track) {
        if(this.state.playerState == "playing") {
          // this.player.pause();
          this.player.currentTime = 0;
          this.player.src = track;
          this.player.play();       
        } 
        if(this.state.playerState == "stopped") {
          this.player.pause();
          this.player.currentTime = 0;
          this.setState({
            selectedTrack: null,
            selectedSource: null,
        })
        }
      }
    }
  }

    createList = () => {
        const {data} = this.props;
        const list = data.map(song => {

            return (
                <li style={styles.listItem} key={song.id}
                onClick={
                  (e) => {
                    if(this.state.playerState == "stopped") {
                      this.setState({
                        selectedTrack: song.id,
                        selectedSource: song.audiosrc,
                        playerState: "playing"
                      });
                    } 
                    if(this.state.selectedTrack != null && this.state.selectedTrack !== song.id && this.state.playerState == "playing") {                      
                      this.setState({
                        selectedTrack: song.id,
                        selectedSource: song.audiosrc,
                        playerState: "playing"
                      });                       
                    } else if(this.state.playerState == "playing") {
                      this.setState({
                        selectedTrack: song.id,
                        selectedSource: song.audiosrc,
                        playerState: "stopped"
                      });
                    } // conditional ends
                  } // function ends
                }
                >
                    <figure style={styles.imageWrapper}>
                        <img style={styles.image} src={song.image}></img>
                    </figure>
                    <figcaption style={styles.figcaption}>
                        <h3 style={Object.assign({}, styles.text, styles.heading)}>{song.title}</h3>
                        <p style={styles.text}>{song.band}</p>
                    </figcaption>
                    <div style={styles.getButton}>
                        <a style={styles.getLink}>GET</a>
                    </div>
                </li>
            )
        });
        // this return is bloody hell important, i funktioner udenfor render()
        return list;
    }

    render() {
        return(
          <div>
            {this.createList()}
            <audio ref={ref => this.player = ref}  />
          </div>
        ) 
    }
}

export default ListItem;


const styles = {
  container: {
    display: 'block',
    width: '100%',
  },
  listItem: {
    width: '100%',
    // height: '',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '1rem 0',
  },
  imageWrapper: {
      width: '50px',
      height: '50px',
      margin: 0,
      marginRight: '5%', 
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  figcaption: {
    flexGrow: 5,
    flexShrink: 5
  },
  text: {
      margin: 0,
      fontSize: '1.5rem',
  },
  heading: {
    fontSize: '2rem',
  },
  getButton: {
    display: 'table',
    height: '2rem',
    width: '4rem',
    backgroundColor: '#ff2c5d',
    borderRadius: '15px',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  getLink: {
    display: 'table-cell',
    fontWeight: 'bold',
    color: 'white',
    verticalAlign: 'middle',
  },
  form: {
    display: 'inline-block',
    // border: '1px solid yellow',
  },
}
