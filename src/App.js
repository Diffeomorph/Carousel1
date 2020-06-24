import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import './App.css'
//import Library from './components/library/Library';
//import Album from './components/album/Album';
import Slider from './components/landing/slider/slider';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <main>
          <Router>
            <Route exact path='/' component={Slider} />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;


//<Route path='/album/:slug' component={Album}/>
// <Route path='/library' component={Library}/>          