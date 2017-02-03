import React, {Component} from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image,
  Text,
  Dimensions,
  ScrollView
} from 'react-native';

const WIRE_LOGO_LARGE = require('./img/wire_logo_large.png');
const DISMISS_KEYBOARD = require('dismissKeyboard');

export default class LoginScreen extends Component {

  static get defaultProps() {
    return {title: 'LoginScreen'};
  }

  constructor(props) {
    super(props);

    this.components = {};
    this.components.usernameField = (
      <TextInput ref='UsernameField' style={{height: 40, width: 150}} placeholder='Username'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.PasswordField.focus();
        }}/>
    );
    this.components.passwordField = (
      <TextInput ref='PasswordField' style={{height: 40, width: 150}} placeholder='Password'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        secureTextEntry={true} returnKeyType={'done'}
      />
    );
    this.components.loginButton = (
      <TouchableNativeFeedback
        disabled={false}
        onPress={() => {
          this.props.navigator.push({title: 'Dashboard', index: 4})
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </View>
      </TouchableNativeFeedback>
    );
    this.components.registerButton = (
      <TouchableNativeFeedback
        disabled={false}
        onPress={() => {this.props.onRegister()}}>
        <View style={styles.smallButton}>
          <Text style={styles.smallButtonText}>REGISTER</Text>
        </View>
      </TouchableNativeFeedback>
    );
    this.components.recoverButton = (
      <TouchableNativeFeedback
        disabled={false}
        onPress={() => {this.props.onRecover()}}>
        <View style={styles.smallButton}>
          <Text style={styles.smallButtonText}>RECOVER</Text>
        </View>
      </TouchableNativeFeedback>
    );
    this.components.wireLogoLarge = (
      <Image source={WIRE_LOGO_LARGE} style={styles.largeLogo}/>
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => DISMISS_KEYBOARD()}
        style={{color: 'transparent', backgroundColor: 'transperent'}}>
        <View style={styles.screen}>
          <View style={[styles.pad, {flex: 0.5}]}></View>
          <View style={[styles.container, {flex: 3}]}>
            {this.components.wireLogoLarge}
          </View>
          <View style={[styles.pad, {flex: 0.1}]}></View>
          <View style={[styles.container, {flex: 2, width: Dimensions.get('window').width}]}>
              {this.components.usernameField}
              {this.components.passwordField}
            </View>
          <View style={[styles.container, {flex: 2}]}>
            <View style={[styles.container, {flex: 5}]}>
              {this.components.loginButton}
            </View>
            <View style={[styles.pad, {flex: 1}]}></View>
          </View>
          <View style={[styles.pad, {flex: 1.5, flexDirection: 'row'}]}>
            <View style={{margin: 5}}>
              {this.components.registerButton}
            </View>
            <View style={{margin: 5}}>
              {this.components.recoverButton}
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
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

  smallButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D02035',
    elevation: 2,
    borderRadius: 3
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D02035',
    elevation: 4,
    borderRadius: 2
  },

  smallButtonText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    padding: 5,
    fontWeight: '500'
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
