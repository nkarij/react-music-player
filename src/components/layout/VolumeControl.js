import React, { Component } from 'react'
import ReactDOM from "react-dom";

class Volume extends Component {

  constructor(props) {
    super(props)
  }

  state = {
    playerState: "auto",
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.playerState === "auto"){
        this.player.play();
    } else if(this.state.playerState === "playing"){
        this.player.play();
      } else if(this.state.playerState === "stopped") {
        this.player.pause();
      }
  }


  createAudioControls = () => {
    return(
      <div style={styles.audiocontrols}>
      <div ><i style={styles.sidebutton}className="fas fa-step-backward"></i></div>
      <div >
        <i style={styles.playbutton}
        onClick={
          (e) => {
            this.changePlayerState(e);
          }
        }
        className="fas fa-pause-circle"></i></div>
      <div><i style={styles.sidebutton} className="fas fa-step-forward"></i></div>
    </div>
    )
  }

  changePlayerState = (e) => {
    if(this.state.playerState === "playing" || this.state.playerState === "auto" ){
      this.setState({ playerState: "stopped" });
      e.target.className="fas fa-play-circle";  
    }
    if(this.state.playerState === "stopped") {
        this.setState({ playerState: "playing" });
        e.target.className = "fas fa-pause-circle";
    }
  }

  render() {

    const audiofile = this.props.source;
    // console.log(audiofile);

    return (
      <div style={styles.container}>
        <audio autoPlay src={audiofile.audiosrc} ref={ref => this.player = ref}  />
       {this.createAudioControls()}
      </div>
    )
  }
}

export default Volume;


const styles = {
  container: {
    display: 'block',
    // textAlign: 'center',
  },
  audiocontrols: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    margin: '0 auto',
  },
  playbutton: {
    fontSize: '6rem',
    margin: '0 1rem',
    // color: 'var(--theme-color)'
  },
  sidebutton: {
    fontSize: '3.5rem',
    // color: 'var(--theme-color)',
  }
}
