import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  StatusBar
} from 'react-native';

import {
  Button
} from 'react-native-elements';

import StateButton from './StateButton';

WIRE_LOGO_LARGE = require('./img/wire_logo_large.png');

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
        <StatusBar backgroundColor={palette.blue}/>
        <View style={{flex: 0.5}}></View>
        <View style={[styles.container, {flex: 3}]}>
          {this.components.wireLogoLarge}
        </View>
        <View style={{flex: 0.1}}></View>
        <View style={[styles.container, {flex: 2, alignSelf: 'stretch'}]}>
          <StateButton onPress={this._register} pressedStyle={[styles.buttonPressed,
            {backgroundColor: palette.lightTealDark}]}
            style={[styles.button, {backgroundColor: palette.lightTeal}]}
            textStyle={styles.buttonText}
            textPressedStyle={styles.buttonTextPressed}
            text='Register'/>
        </View>
        <View style={[styles.container, {flex: 2}]}>
          <View style={[styles.container, {flex: 5}]}>
            <StateButton onPress={this._login} pressedStyle={styles.buttonPressed}
              style={styles.button} textStyle={styles.buttonText}
              textPressedStyle={styles.buttonTextPressed}
              text='Login'/>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={{flex: 1.5}}></View>
      </View>
    );
  }

}

palette = {
  ripple: '#DAECF3',
  rippleDark: '#D2E4EF',
  crush: '#FE424D',
  crushDark: '#FB3D48',
  seafloor: '#1AA6B7',
  seafloorDark: '#17A3B4',
  cyprus: '#022D41',
  cyprusLight: '#426D81',
  white: '#F5F5F5',
  whiteDark: '#E0ECF3',
  lightTeal: '#00A0D5',
  lightTealDark: '#0095D0',
  lightBlue: '#29B6F6',
  lightBlueDark: '#22B0F2',
  blue: '#0094D3',
  teal: '#1493A4',
  tealDark: '#108DA0',
  aqua: '#72CEDD',
  turquoise: '#63C8C4',
  pureWhite: 'white'
};

styles = StyleSheet.create({

  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.white,
    flex: 1
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.seafloor,
    elevation: 4
  },

  buttonPressed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: palette.seafloorDark,
    elevation: 2
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 24,
    color: palette.white,
    paddingHorizontal: 60,
    paddingVertical: 10,
    fontWeight: '500'
  },

  buttonTextPressed: {
    textAlign: 'center',
    fontSize: 24,
    color: palette.whiteDark,
    paddingHorizontal: 59,
    paddingVertical: 9,
    fontWeight: '100'
  },

  largeLogo: {
    width: 273,
    height: 112
  },

  headerToolbar: {
    backgroundColor: palette.lightBlue,
    alignSelf: 'stretch',
    height: 65,
    elevation: 2,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },

  headerTitle: {
    fontFamily: 'sans-serif-medium',
    fontWeight: '100',
    fontSize: 30,
    color: palette.pureWhite,
    paddingLeft: 30
  },

  footerToolbar: {
    backgroundColor: palette.ripple,
    alignSelf: 'stretch',
    height: 55,
    elevation: 2,
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: palette.rippleDark
  }

});
