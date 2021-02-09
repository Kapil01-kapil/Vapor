import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './src/store';
import VaporNavigation from './src/navigation/VaporNavigation';

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <VaporNavigation />
      </Provider>
    );
  }
}
