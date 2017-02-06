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
          <View style={styles.headerToolbar}>
            <View style={styles.container}>
              <Text style={styles.headerTitle}>Register</Text>
            </View>
          </View>
          <View style={{flex: 1}}/>
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
          <View style={[styles.container, {flex: 1.5}]}>
            <View style={[styles.container, {marginBottom: 40}]}>
              <StateButton onPress={this._register}
                style={stylesLocal.registerButton}
                pressedStyle={stylesLocal.registerButtonPressed}
                textStyle={stylesLocal.registerButtonText}
                textPressedStyle={stylesLocal.registerButtonTextPressed}
                text='Register'/>
            </View>
          </View>
          <View style={styles.footerToolbar}>
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

  registerButton: [
    styles.button, {
      height: 50, width: 150, elevation: 4, backgroundColor: palette.crush
    }
  ],

  registerButtonPressed: [
    styles.button, {
      height: 48, width: 148, elevation: 2, backgroundColor: palette.crushDark
    }
  ],

  registerButtonText: [
    styles.buttonText, {
      fontSize: 22,
      paddingHorizontal: 20
    }
  ],

  registerButtonTextPressed: [
    styles.buttonTextPressed, {
      fontSize: 22,
      paddingHorizontal: 19
    }
  ]

};
