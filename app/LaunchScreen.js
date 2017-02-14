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
          <StateButton onPress={this._register}
            style={[styles.button, {backgroundColor: palette.lightTeal}]}
            pressedStyle={[styles.buttonPressed, {backgroundColor: palette.lightTealDark}]}
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
  ripple: '#E1F5FE',
  rippleDark: '#E0F3FD',
  crush: '#FE424D',
  crushDark: '#FB3D48',
  seafloor: '#33d0be',
  seafloorDark: '#30cdbb',
  cyprus: '#022D41',
  cyprusLight: '#325D71',
  white: '#FAFAFA',
  whiteDark: '#E0ECF3',
  lightTeal: '#1e88e5',
  lightTealDark: '#1b85e3',
  lightBlue: '#03A9F4',
  lightBlueDark: '#00A5F2',
  blue: '#039BE5',
  teal: '#009688',
  tealDark: '#009486',
  aqua: '#72CEDD',
  turquoise: '#00bcd4',
  turquoiseDark: '#00bad1',
  pureWhite: '#FFFFFF',
  moneyGreen: '#33AA88',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  headerTitle: {
    fontFamily: 'sans-serif-medium',
    fontWeight: '500',
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
    borderColor: palette.rippleDark,
  },

  balance: {
    fontSize: 24,
    color: '#33AA88',
    fontWeight: '400',
  },

  blockTitle: {color: palette.cyprus, fontSize: 20,
    padding: 0, margin: 0, marginBottom: 2, fontWeight: '500'}

});
