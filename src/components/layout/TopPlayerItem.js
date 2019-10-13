import React, { Component } from 'react'
import { Link, NavLink} from 'react-router-dom'

class ListItem extends Component {

  state = {
    selectedTrack: null,
    selectedSource: null,
    hover: false,
  }

  componentDidUpdate(prevState) {
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

    createGetButton = (song) => {
      return(
        <div style={styles.getButton}>
        <a style={styles.getLink}>GET</a>
        </div>
      )
    }

    createList = () => {
        const {data} = this.props;
        const list = data.map((song) => {
            return (
                <li key={song.id} style={styles.listItem}>
                  <Link to={{
                    pathname: '/player',
                    state: {
                      songid: song.id,
                      source: song.audiosrc,
                    }
                  }}
                  style={styles.link}
                  className="top-item__link"
                  >
                    {this.createSongImage(song)}
                    {this.createSongTexts(song)}
                    {this.createGetButton(song)}
                  </Link>
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
    display: 'block',
    width: '100%',
    // height: '',
    margin: '1rem 0',
  },
  link: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: 'black',
    '&:hover': {
      backgroundColor: 'red',
      cursor: 'pointer',
    }
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
    // flexGrow: 5,
    // flexShrink: 5
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
    fontFamily: 'var(--sansSerifFont)',
    fontSize: '1.2rem',
    letterSpacing: '1px',
    fontWeight: 'bold',
    color: 'white',
    verticalAlign: 'middle',
    
  },
  form: {
    display: 'inline-block',
    // border: '1px solid yellow',
  },
}
