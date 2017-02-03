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
  TouchableWithoutFeedback
} from 'react-native';

const WIRE_LOGO_LARGE = require('./img/wire_logo_large.png');
const DISMISS_KEYBOARD = require('dismissKeyboard');

export default class RegisterScreen extends Component {

  static get defaultProps() {
    return {title: 'RegisterScreen'};
  }

  constructor(props) {
    super(props);
    this.components = {};
    this.components.backButton = (
      <TouchableNativeFeedback
        onPress={() => {this.props.onBack()}}>
        <View style={[styles.smallButton, {left: 10, width: 50}]}>
          <Text style={styles.smallButtonText}>BACK</Text>
        </View>
      </TouchableNativeFeedback>
    );
    this.components.usernameField = (
      <TextInput ref='UsernameField' style={{height: 40, width: 150}} placeholder='Username'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.PasswordField.focus();
        }}
      />
    );
    this.components.passwordField = (
      <TextInput ref='PasswordField' style={{height: 40, width: 150}} placeholder='Password'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false} secureTextEntry={true}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.ConfirmPasswordField.focus();
        }}
      />
    );
    this.components.confirmPasswordField = (
      <TextInput ref='ConfirmPasswordField' style={{height: 40, width: 150}} placeholder='Confirm Password'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false} secureTextEntry={true}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.FirstNameField.focus();
        }}
      />
    );
    this.components.firstNameField = (
      <TextInput ref='FirstNameField' style={{height: 40, width: 150}} placeholder='First Name'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.LastNameField.focus();
        }}
      />
    );
    this.components.lastNameField = (
      <TextInput ref='LastNameField' style={{height: 40, width: 150}} placeholder='Last Name'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.EmailField.focus();
        }}
      />
    );
    this.components.emailField = (
      <TextInput ref='EmailField' style={{height: 40, width: 150}} placeholder='Email'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
          this.refs.PhoneNumberField.focus();
        }}
      />
    );
    this.components.phoneNumberField = (
      <TextInput ref='PhoneNumberField' style={{height: 40, width: 150}} placeholder='Phone Number'
        onChangeText={(text) => {}} autoCorrect={false} autoCapitalize='none' maxLength={32}
        underlineColorAndroid='#D02035' autoComplete={false}
        returnKeyType={'next'}
        onSubmitEditing={(event) => {
        }}
      />
    );
    this.components.registerButton = (
      <TouchableNativeFeedback
        onPress={() => {
          this.props.navigator.push({title: 'Dashboard', index: 4});
        }}>
        <View style={[styles.button, {alignSelf: 'center'}]}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    return (
      <View style={styles.screen}>
        <TouchableWithoutFeedback onPress={() => {DISMISS_KEYBOARD()}}>
          <View style={styles.headerToolbar}>
            <Image source={WIRE_LOGO_LARGE} style={styles.logoSmall}/>
          </View>
        </TouchableWithoutFeedback>
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
          <View style={{height: 15}}></View>
          <View style={{flex: 6}}>
            <View style={{flex: 3}}>
              {this.components.usernameField}
              {this.components.passwordField}
              {this.components.confirmPasswordField}
            </View>
            <View style={{height: 53}}></View>
            <View style={{flex: 2}}>
              {this.components.firstNameField}
              {this.components.lastNameField}
            </View>
            <View style={{height: 37}}></View>
            <View style={{flex: 3}}>
              <View style={{flex: 2}}>
                {this.components.emailField}
                {this.components.phoneNumberField}
              </View>
              <View style={{height: 25}}></View>
              <View style={{flex: 1}}>
                {this.components.registerButton}
              </View>
              <View style={{height: 25}}></View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerToolbar}>
          {this.components.backButton}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  screen: {
    justifyContent: 'center',
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
    borderRadius: 3,
    borderColor: '#A50723',
    borderWidth: 1
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D02035',
    elevation: 4,
    borderRadius: 2,
    paddingHorizontal: 12,
    paddingVertical: 4
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
    fontSize: 14,
    color: 'white',
    fontWeight: '500'
  },

  footerToolbar: {
    backgroundColor: '#E02935',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40,
    elevation: 11,
    borderTopWidth: 1,
    borderTopColor: '#D53046',
    borderLeftWidth: 1,
    borderLeftColor: '#D53046',
    borderRightWidth: 1,
    borderRightColor: '#D53046',
    alignSelf: 'stretch'
  },

  headerToolbar: {
    height: 60,
    backgroundColor: "#EEEEEE",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD'
  },

  logoSmall: {
    width: 130,
    height: 54
  },

  pad: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  }

});
