import React, { Component } from 'react';
import './App.css';
import PageNav from './components/nav';
import HomeBanner from './components/banner';
import HowTo from './components/howto';



class App extends Component {
  render() {
    return (
      <div>
        <PageNav />
        <HomeBanner />
        <HowTo />

      </div>
    );
  }
}

export default App;
