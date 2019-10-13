import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';
import Frontpage from './Frontpage';
import Player from './Player'
import * as serviceWorker from './serviceWorker';
import NavBar from './components/global/stickyfooter'
import PlayListPage from './PlayListPage'
import AllTracksPage from './AllTracksListPage'

class Index extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/home" component={ Frontpage } />
          <Route path="/player" component={ Player } />
          <Route path="/playlist" component={ PlayListPage } />
          <Route path="/all" component={ AllTracksPage } />
          <NavBar />
        </div>
      </BrowserRouter>
    )
  }
}

export default Index;


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: '1',
    }
}
