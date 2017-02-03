import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  Dimensions,
  TextInput
} from 'react-native';

const WIRE_LOGO_LARGE = require('./img/wire_logo_large.png');

export default class LaunchScreen extends Component {

  static get defaultProps() {
    return {title: 'LaunchScreen'};
  }

  constructor(props) {
    super(props);
    this._register = this._register.bind(this);
    this._login = this._login.bind(this);

    this.components = {};
    this.components.wireLogoLarge = (
      <Image source={WIRE_LOGO_LARGE} style={styles.largeLogo}/>
    );
    this.components.loginButton = (
      <TouchableNativeFeedback
        disabled={false}
        onPress={this._login}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableNativeFeedback>
    );
    this.components.registerButton = (
      <TouchableNativeFeedback
        disabled={false}
        onPress={this._register}>
        <View style={styles.button}>
          <Text style={[styles.buttonText, {fontSize: 20}]}>REGISTER</Text>
        </View>
      </TouchableNativeFeedback>
    );

  }

  _register() {
    this.props.navigator.push({title: 'RegisterScreen', index: 3});
  }

  _login() {
    this.props.navigator.push({title: 'LoginScreen', index: 2});
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={[styles.pad, {flex: 0.5}]}></View>
        <View style={[styles.container, {flex: 3}]}>
          {this.components.wireLogoLarge}
        </View>
        <View style={[styles.pad, {flex: 0.1}]}></View>
        <View style={[styles.container, {flex: 2, width: Dimensions.get('window').width}]}>
          {this.components.registerButton}
        </View>
        <View style={[styles.container, {flex: 2}]}>
          <View style={[styles.container, {flex: 5}]}>
            {this.components.loginButton}
          </View>
          <View style={[styles.pad, {flex: 1}]}></View>
        </View>
        <View style={[styles.pad, {flex: 1.5}]}></View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flex: 1
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D02035',
    elevation: 4,
    borderRadius: 2
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: '500'
  },

  largeLogo: {
    width: 260,
    height: 107
  },

  pad: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

});
