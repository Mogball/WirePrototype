import React, { Component } from 'react';

import {
  AppRegistry,
  Navigator
} from 'react-native';

import LoadingScreen from './app/LoadingScreen';

class WirePrototype extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator initialRoute={{ title: 'LoadingScreen', index: 0 }}
                 renderScene={ (route, navigator) => {
                   return <LoadingScreen title={route.title} />
                 }}/>
    );
  }

}

AppRegistry.registerComponent('WirePrototype', () => WirePrototype);
