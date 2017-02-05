import React, {Component} from 'react';

import {
  StyleSheet,
  TouchableNativeFeedback,
  TouchableHighlight,
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';

import BarebonesTextInput from './BarebonesTextInput';
import StateButton from './StateButton';
import AntiKeyboard from './AntiKeyboard';

export default class RegisterScreen extends Component {

  static get defaultProps() {
    return {title: 'RegisterScreen'};
  }

  constructor(props) {
    super(props);
    this._back = this._back.bind(this);
    this._register = this._register.bind(this);
    this._submitEmailPhone = this._submitEmailPhone.bind(this);
    this._submitPassword = this._submitPassword.bind(this);
    this._submitConfirmPassword = this._submitConfirmPassword.bind(this);
  }

  _back() {
    this.props.onBack();
  }
  _register() {
    this.props.navigator.push({title: 'Dashboard', index: 4});
    DISMISS_KEYBOARD();
  }
  _submitEmailPhone() {
    this.refs.PasswordField.focus();
  }
  _submitPassword() {
    this.refs.ConfirmPasswordField.focus();
  }
  _submitConfirmPassword() {
    this._register();
  }

  render() {
    return (
      <AntiKeyboard>
        <View style={[styles.screen, {justifyContent: 'flex-start'}]}>
          <StatusBar backgroundColor={palette.blue}/>
          <View style={{backgroundColor: palette.lightBlue, alignSelf: 'stretch', height: 65,
            elevation: 2, alignItems: 'flex-start', justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontFamily: 'sans-serif-medium', fontWeight: '100',
                fontSize: 30, color: palette.pureWhite, paddingLeft: 30}}>Register</Text>
            </View>
          </View>
          <View style={[{flex: 1}, styles.container]}>
            <BarebonesTextInput ref='EmailField' placeholder='Email or phone number'
              onSubmitEditing={this._submitEmailPhone}
              style={{fontSize: 16, height: 40, width: 270, textAlign: 'center',
              marginBottom: 7}}/>
            <BarebonesTextInput ref='PasswordField' placeholder='Password'
              secureTextEntry={true}
              onSubmitEditing={this._submitPassword}
              style={{fontSize: 16, height: 40, width: 170, textAlign: 'center'}}/>
            <BarebonesTextInput ref='ConfirmPasswordField' placeholder='Confirm password'
              secureTextEntry={true} returnKeyType={'done'}
              onSubmitEditing={this._submitConfirmPassword}
              style={{fontSize: 16, height: 40, width: 150, textAlign: 'center'}}/>
          </View>
          <View style={{backgroundColor: palette.ripple, alignSelf: 'stretch', height: 55,
            elevation: 2, justifyContent: 'center', borderTopWidth: 1, borderColor: palette.rippleDark}}>
            <View style={{justifyContent: 'center', alignItems: 'center', width: 100}}>
              <StateButton onPress={this._back}
                style={stylesLocal.backButton}
                pressedStyle={stylesLocal.backButtonPressed}
                textStyle={stylesLocal.backButtonText}
                textPressedStyle={stylesLocal.backButtonTextPressed}
                text='Back'/>
            </View>
          </View>
        </View>
      </AntiKeyboard>
    );
  }

}

const stylesLocal = {

  backButton: [
    styles.button, {
      height: 35, width: 80, elevation: 6
    }
  ],

  backButtonPressed: [
    styles.button, {
      height: 33, width: 78, elevation: 4
    }
  ],

  backButtonText: [
    styles.buttonText, {
      fontSize: 17,
      paddingHorizontal: 20
    }
  ],

  backButtonTextPressed: [
    styles.buttonTextPressed, {
      fontSize: 17,
      paddingHorizontal: 19
    }
  ],

  registerButton: {

  },

  registerButtonPressed: {

  }

};
