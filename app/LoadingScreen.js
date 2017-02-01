import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image, Text
} from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

export default class LoadingScreen extends Component {

  static get defaultProps() {
    return { title: 'LoadingScreen' };
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={ true } />
        <Counter />
      </View>
    );
  }

}

class Counter extends Component {

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      if (this.state.count >= 5) {
        this.setState({ count: 0 });
        clearInterval();
      }
    }, 1000);
  }

  render() {
    let n = this.state.count;
    return (
      <View>
        <Text>{n}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF1234',
  },

});
