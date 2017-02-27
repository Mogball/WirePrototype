import React, {Component} from 'react';

import {
    StyleSheet,
    TextInput,
    View,
    TouchableWithoutFeedback,
    Image,
    Text,
    StatusBar
} from 'react-native';

import StateButton from './StateButton';
import BarebonesTextInput from './BarebonesTextInput';
import UserModel from "./Models/UserModel";

DISMISS_KEYBOARD = require('dismissKeyboard');

export default class LoginScreen extends Component {

    static get defaultProps() {
        return {title: 'LoginScreen'};
    }

    constructor(props) {
        super(props);
        this._login = this._login.bind(this);
        this._register = this._register.bind(this);
        this._recover = this._recover.bind(this);
        this._submitEmailPhone = this._submitEmailPhone.bind(this);
        this._submitPassword = this._submitPassword.bind(this);
        this._onChangeEmailPhone = this._onChangeEmailPhone.bind(this);
        this._onChangePassword = this._onChangePassword.bind(this);

        this.state = {
            emailphone: "",
            password: ""
        };

        this.components = {};
        this.components.wireLogoLarge = (
            <Text style={{fontSize: 100, fontWeight: '500', color: palette.white}}>Vire</Text>
        );
    }

    _login() {
        // TODO Disable the email/phone and password fields and the login button during the request
        let emailphone = this.state.emailphone;
        let password = this.state.password;
        const ref = this.props.firebase.database().ref('/users');
        const type = emailphone.indexOf('@') >= 0 ? 'email_address' : 'phone_number';
        let navigator = this.props.navigator;
        ref.orderByChild(type).equalTo(emailphone).once('value').then(function (snapshot) {
            const value = snapshot.val();
            if (value) {
                let userDB;
                let uid;
                for (let key in value) {
                    if (value.hasOwnProperty(key)) {
                        userDB = value[key];
                        uid = key;
                    }
                }
                if (userDB['password'] === password) {
                    user = new UserModel(uid, userDB['email_address'], userDB['phone_number'],
                    userDB['first_name'], userDB['last_name'], userDB['country'], userDB['state'], userDB['city']);
                    navigator.push({title: 'Dashboard', index: 4});
                } else {
                    // TODO Display login failed message "Incorrect email/phone number or password"
                    alert("Incorrect email/phone number or password");
                }
            } else {
                // TODO Display login failed message "Incorrect email/phone number or password"
                alert("Incorrect email/phone number or password");
            }
        });
        //let result = this.props.firebase.database().ref('/users').orderByChild('email-address').equalTo()
        //this.props.navigator.push({title: 'Dashboard', index: 4})
        DISMISS_KEYBOARD();
    }

    _register() {
        this.props.onRegister();
    }

    _recover() {
        this.props.onRecover();
    }

    _submitEmailPhone() {
        this.refs.PasswordField.focus();
    }

    _submitPassword() {
        this._login();
    }

    _onChangePassword(text) {
        this.setState({password: text});
    }

    _onChangeEmailPhone(text) {
        this.setState({emailphone: text});
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => DISMISS_KEYBOARD()}
                                      style={{color: 'transparent', backgroundColor: 'transperent'}}>
                <View style={[styles.screen, {backgroundColor: palette.indigo}]}>
                    <StatusBar backgroundColor={palette.indigoDark2}/>
                    <View style={[styles.pad, {flex: 0.5}]}/>
                    <View style={[styles.container, {flex: 3}]}>
                        {this.components.wireLogoLarge}
                    </View>
                    <View style={[styles.pad, {flex: 0.1}]}/>
                    <View style={[styles.container, {flex: 2, alignSelf: 'stretch'}]}>
                        <BarebonesTextInput ref='EmailPhoneField' placeholder='Email or phone number'
                                            onSubmitEditing={this._submitEmailPhone}
                                            placeholderTextColor={palette.white}
                                            onChangeText={this._onChangeEmailPhone}
                                            style={{
                                                fontSize: 16,
                                                height: 40,
                                                width: 270,
                                                textAlign: 'center',
                                                color: palette.white,
                                                marginBottom: 4
                                            }}/>
                        <BarebonesTextInput ref='PasswordField' placeholder='Password'
                                            secureTextEntry={true} returnKeyType={'done'}
                                            placeholderTextColor={palette.white}
                                            onChangeText={this._onChangePassword}
                                            style={{
                                                fontSize: 16,
                                                height: 40,
                                                width: 150,
                                                textAlign: 'center',
                                                color: palette.white
                                            }}
                                            onSubmitEditing={this._submitPassword}/>
                    </View>
                    <View style={[styles.container, {flex: 2}]}>
                        <View style={[styles.container, {flex: 5, alignSelf: 'stretch'}]}>
                            <StateButton onPress={this._login} style={styles.button}
                                         pressedStyle={styles.buttonPressed} textStyle={styles.buttonText}
                                         textPressedStyle={styles.buttonTextPressed} text='Login'/>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                    <View style={[styles.container, {flex: 1.5, flexDirection: 'row'}]}>
                        <View style={stylesLocal.smallButtonContainer}>
                            <StateButton onPress={this._register} style={stylesLocal.smallButton}
                                         pressedStyle={stylesLocal.smallButtonPressed}
                                         textStyle={stylesLocal.smallButtonText}
                                         textPressedStyle={stylesLocal.smallButtonTextPressed} text='Register'/>
                        </View>
                        <View style={stylesLocal.smallButtonContainer}>
                            <StateButton onPress={this._recover} style={stylesLocal.smallButton}
                                         pressedStyle={stylesLocal.smallButtonPressed}
                                         textStyle={stylesLocal.smallButtonText}
                                         textPressedStyle={stylesLocal.smallButtonTextPressed} text='Recover'/>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const stylesLocal = StyleSheet.create({

    smallButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        marginBottom: 40
    },

    smallButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.lightBlue,
        elevation: 4,
        width: 100,
        height: 35
    },

    smallButtonPressed: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: palette.lightBlueDark,
        elevation: 2,
        width: 98,
        height: 33
    },

    smallButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: palette.white,
        fontWeight: '500'
    },

    smallButtonTextPressed: {
        textAlign: 'center',
        fontSize: 16,
        color: palette.whiteDark,
        fontWeight: '100'
    }

});
