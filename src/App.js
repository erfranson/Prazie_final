import React, { Component } from 'react';
import './App.css';
import PageNav from './components/nav';
import HomeBanner from './components/banner';



class App extends Component {
  render() {
    return (
      <div>
        <PageNav />
        <HomeBanner />
      </div>
    );
  }
}

export default App;
