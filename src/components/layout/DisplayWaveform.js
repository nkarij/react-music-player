
import React, { Component } from 'react'
import CustomImage from '../global/Image'



class App extends Component {

  state = {
      classnameWrapper: "waveform-image-wrapper",
      classnameImage: "waveform-image",
      imageSource: './IMG/waveform.png'
  }

  render() {
    return (
      <div style={styles.container}>
          <CustomImage 
          classWrapper={this.state.classnameWrapper} 
          classImage={this.state.classnameImage}
          source={this.state.imageSource}
          />
      </div>
    )
  }
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    marginTop: '2rem'
  },
  textContainer: {
    margin: '2rem 0',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: '2rem'
  },
  subheading: {
    fontSize: '1.5rem',
    fontWeight: 'normal',
  },
}
