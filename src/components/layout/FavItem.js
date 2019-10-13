import React, { Component } from 'react'


class ListItem extends Component {

  constructor(props){
    super(props);
    this.favorites = [];
  }

  state = {
    selectedTrack: null,
    selectedSource: null,
    playerState: "stopped",
  }

  componentDidMount() {
    const array = this.props.data;
    this.favorites = array;
    this.setState({
      favorites: this.favorites,
    })
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

  componentDidUpdate(prevState) {
    this.createList();

    if(this.state.selectedTrack !== null) {
      let track;
      track = this.state.selectedSource;
      if(track) {
        this.player.src = track;
        if(this.state.playerState == "playing") {
          this.player.play();
          this.state.playbutton.className = "far fa-play-circle";              
        } 
        if(this.state.playerState == "stopped") {
          this.player.pause();
          this.state.playbutton.className = "far fa-pause-circle";
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
          this.state.playbutton.className = "far fa-play-circle";         
        } 
        if(this.state.playerState == "stopped") {
          this.player.pause();
          this.player.currentTime = 0;
          this.state.playbutton.className = "far fa-pause-circle";
          this.setState({
            selectedTrack: null,
            selectedSource: null,
        })
        }
      }
    }
  }

  filterArray = () => {
    if(this.state.isLoading === false) {
      let array = [];
      let filter = this.state.favorites;
      let newArray = this.state.dataSource.map(item => {       
        filter.forEach(id => {
          if(item.id == id){
            array.push(item)
          }
        })
      })
      return array
    }
  }

  spliceArray = (id) => {
    let array = this.state.favorites;
    let index = array.indexOf(id);
    if (index != -1) {
    array.splice(index, 1);
    }
    localStorage.setItem("favs", JSON.stringify(array));
    this.setState({
      favorites: array
    })
  }

  createSongImage = (song) => {
    return(
      <figure style={styles.imageWrapper}>
      <img style={styles.image} src={song.image}></img>
      </figure>
    )
  }

  createSongTexts = (song) => {
    return(
      <figcaption 
      className="top-item__figcaption"
      >
        <h3 style={Object.assign({}, styles.text, styles.heading)}>{song.title}</h3>
        <p style={styles.text}>{song.band}</p>
      </figcaption>
    )
  }

  createPlayButton = (song) => {
    return(
      <div 
      className="playlist__playbutton"
      onClick={
        (e) => {
          this.togglePlayEvent(e, song)
        } // function ends
      } >
      <i className="far fa-pause-circle"></i>
    </div>
    )
  }

  togglePlayEvent = (e, song) => {
    if(this.state.playerState == "stopped") {
      this.setState({
        selectedTrack: song.id,
        selectedSource: song.audiosrc,
        playerState: "playing",
        playbutton: e.currentTarget.querySelector("i")
      });
    } 
    if(this.state.selectedTrack != null && this.state.selectedTrack !== song.id && this.state.playerState == "playing") {
      this.setState({
        selectedTrack: song.id,
        selectedSource: song.audiosrc,
        playerState: "playing",
        playbutton: e.currentTarget.querySelector("i")
      });
    } else if(this.state.playerState == "playing") {
      this.setState({
        selectedTrack: song.id,
        selectedSource: song.audiosrc,
        playerState: "stopped",
        playbutton: e.currentTarget.querySelector("i")
      });
    } // conditional ends
  }

    createList = () => {
        if(this.state.isLoading === false) {
        let array = this.filterArray();
        const list = array.map(song => {
            return (
                <li style={styles.listItem} key={song.id}>
                    {this.createSongImage(song)}
                    {this.createSongTexts(song)}
                    {this.createPlayButton(song)}
                    {/* removebutton */}
                  <div 
                    onClick={
                      (e) => {
                        this.spliceArray(song.id);                        
                      }
                    }
                    style={styles.getButton}>
                      <a style={styles.getLink}>Remove</a>
                  </div>
                </li>
            )
        });
        // this return is bloody hell important, i funktioner udenfor render()
        return list;
      }
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
    width: '5rem',
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
