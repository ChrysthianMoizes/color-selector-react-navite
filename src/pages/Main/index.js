import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import Color from '../../components/Color';
import Selector from '../../components/Selector';
import store from '../../store';

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar barStyle='light-content' backgroundColor='#000' translucent={false}/>
        <Color />
        <Selector />
      </Provider>
    );
  }
}
