/**
  * This component will display an image of a galaxy when pressing a button.
  */

import React, { Component } from 'react';

import {
  View,
  Image,
  Button
} from 'react-native';

export default class Galaxy extends Component {

  constructor(props) {
    super(props);
    this.state = { displayGalaxy: false };
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    this.setState({ displayGalaxy: !this.state.displayGalaxy });
  }

  render() {
    return (
      <View>
        <Button title='Gucci'
          color={ this.state.displayGalaxy ? '#FF1234' : '#841523' }
          onPress={ this._onPress }/>
        { this.state.displayGalaxy ? <GalaxyImage /> : null }
      </View>
    );
  }

}

const tarantula = require('./img/tarantula.jpg');
class GalaxyImage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image source={tarantula} style={{ width: 300, height: 300}} />
    );
  }

}
