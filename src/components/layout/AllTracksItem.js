import React, { Component } from 'react'

class ListItem extends Component {

    createList = () => {
        const {data} = this.props;
        const list = data.map(song => {
            return (
                <li className="playlist__song" style={styles.listItem} key={song.id}>
                  <div className="playlist__texts">
                    <h3 style={Object.assign({}, styles.text, styles.heading)}>                {song.title}
                    </h3>
                    <p className="playlist__subheading" style={styles.text}>{song.band}</p>
                  </div>
                  <div className="playlist__playbutton">
                    <i className="far fa-pause-circle"></i>
                  </div>
                </li>
            )
        });
        // this return is bloody hell important, i funktioner udenfor render()
        return list;
    }

    render() {
        return (
            <div style={styles.listItemContainer}>
                {/* hvis man kalder en funktion, skal den have () */}
                {this.createList()}
            </div>
        )
    }
}

export default ListItem;


const styles = {
  container: {
    display: 'block',
  },
  imageWrapper: {
      margin: 0,
      marginRight: '5%', 
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
