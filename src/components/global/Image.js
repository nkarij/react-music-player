import React, { Component } from 'react'

class Avatar extends Component {

  render() {

    const { classWrapper, classImage, source } = this.props;

    return (
      <div style={styles.container}>
        <div className={classWrapper}>
            <img className={classImage} src={source}></img>
        </div>
      </div>
    )
  }
}

export default Avatar;


const styles = {
  container: {
    // display: 'block',
  },
}
