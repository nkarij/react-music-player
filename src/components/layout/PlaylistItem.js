import React, { Component } from 'react'

class ListItem extends Component {

    constructor(props){
      super(props);
      this.favourites = [];
    }

    state = {
      selectedTrack: null,
      selectedSource: null,
      playerState: "stopped",
      isStarred: false,
      favourites: null,
      star: null,
    }

    componentDidMount() {
      if(localStorage.getItem("favs")){
        let temp = JSON.parse(localStorage.getItem("favs"));
        this.favourites = temp;
      } else {
        this.favourites = [];
      }
    }

    componentDidUpdate(prevState) {
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
            this.player.currentTime = 0;
            this.state.playbutton.className = "far fa-pause-circle";
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
            // this.player.currentTime = 0;
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
    } // CDU ends

    distincArray = () => {
      let tempArray = [...new Set(this.favourites)];
      this.favourites = tempArray;
    }

    spliceArray = (id) => {
      let index = this.favourites.indexOf(id);
      if (index != -1) {
      this.favourites.splice(index, 1);
      }
    }

    toggleStarEvent = (e, song) => {
        if(e.currentTarget.querySelector("input").checked) {
          e.currentTarget.querySelector("input").checked = false;
          e.currentTarget.querySelector("i").className = "far fa-star"
          this.distincArray();
          this.spliceArray(song.id);
          localStorage.setItem("favs", JSON.stringify(this.favourites));
      } else if(!e.currentTarget.querySelector("input").checked) {
          e.currentTarget.querySelector("input").checked = true;
          e.currentTarget.querySelector("i").className = "fas fa-star"
          this.favourites.push(song.id);
          this.distincArray();
          localStorage.setItem("favs", JSON.stringify(this.favourites));
          // console.log(this.favourites)
      }
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

    createPlayButton = (song) => {
      return(
        <div 
          className="playlist__playbutton"
          onClick={
            (e) => {
              this.togglePlayEvent(e, song);
            } // function ends
          } >
            <i className="far fa-pause-circle"></i>
          </div>
      )
    }

    createStarItems = (song) => {
      return(
        <div className="playlist__menu"
        onClick={
          (e) => {
            this.toggleStarEvent(e, song);
          }}>
          <input style={styles.checkbox} className="checkbox" type="checkbox"></input>
          <i className="far fa-star"></i>
        </div>
      )
    }

    createListItem = () => {
        // deconstruct props
        const {data} = this.props;
        // map songs
        const list = data.map(song => {
            return (
                <li keyid={song.id} 
                  className="playlist__song" style={styles.listItem} 
                  key={song.id}>
                  <a className="playlist__texts">
                    <h3 style={Object.assign({}, styles.text, styles.heading)}>                {song.title}
                    </h3>
                    <p className="playlist__subheading" style={styles.text}>{song.band}</p>
                  </a>
                  {this.createPlayButton(song)}
                  {this.createStarItems(song)}
                </li>
            )
        });
        return list;
    }

    render() {
        return (
            <div style={styles.listItemContainer}>
                {this.createListItem()}
                <audio ref={ref => this.player = ref}  />
            </div>
        )
    }
}

export default ListItem;


const styles = {
  test: {
    zIndex: '900',
  },
  container: {
    display: 'block',
  },
  imageWrapper: {
      margin: 0,
      marginRight: '5%', 
  },
  checkbox: {
    display: 'none',
  },
//   image: {

//   },
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
}
