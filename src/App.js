import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from '../src/components/Posts';
import Postform from '../src/components/Postform';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Postform />
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
