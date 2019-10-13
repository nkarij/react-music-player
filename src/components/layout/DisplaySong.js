
import React, { Component } from 'react'
import CustomImage from '../global/Image'



class App extends Component {

  state = {
      classnameWrapper: 'player__featured-image-wrapper',
      classnameImage: 'player__featured-image',
  }

  render() {
    const { data } = this.props;
    // console.log(data);

    return (
      <div style={styles.container}>
          <CustomImage
          classWrapper={this.state.classnameWrapper} 
          classImage={this.state.classnameImage}
          source={data.image} />
          <div style={styles.textContainer}>
            <p style={styles.paragraph}>Now Playing</p>
            <h2 style={styles.heading}>{data.band} - {data.title}</h2>
            <h3 style={styles.subheading}>{data.title}</h3>
          </div>
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
    margin: '1.5rem 0',
    textAlign: 'center',
    marginBottom: '3rem'
  },
  paragraph: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  heading: {
    fontSize: '2.2rem'
  },
  subheading: {
    fontSize: '1.8rem',
    fontWeight: 'normal',
  },
}
