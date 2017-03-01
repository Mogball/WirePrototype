import React, {Component} from 'react';

import {
    StyleSheet,
    TextInput,
    View,
    TouchableWithoutFeedback,
    Text,
    StatusBar,
    InteractionManager,
    Modal,
    ActivityIndicator
} from 'react-native';

import dismissKeyboard from "dismissKeyboard";

import UserModel from "../Models/UserModel";
import SessionModel from '../Models/SessionModel';
import palette from '../Style/Palette';
import style from './Style';

import LoadingModal from './Components/LoadingModal';
import StateButton from '../StateButton';
import BarebonesTextInput from '../BarebonesTextInput';

export default class LoginScreen extends Component {

    static get defaultProps() {
        return {title: 'LoginScreen'};
    }

    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.recover = this.recover.bind(this);
        this.submitEmailPhone = this.submitEmailPhone.bind(this);
        this.onChangeEmailPhone = this.onChangeEmailPhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            emailphone: "",
            password: "",
            modal: false
        };

        this.components = {};
        this.components.wireLogoLarge = (
            <Text style={style.vireLogo}>Vire</Text>
        );
    }

    login() {
        // TODO Disable the email/phone and password fields and the login button during the request
        this.setState({modal: true});
        InteractionManager.runAfterInteractions(() => {
            let emailphone = this.state.emailphone;
            let password = this.state.password;
            const ref = SessionModel.get().getFirebase().database().ref('/users');
            const type = emailphone.indexOf('@') >= 0 ? 'email_address' : 'phone_number';
            let navigator = this.props.navigator;
            $this = this;
            ref.orderByChild(type).equalTo(emailphone).once('value').then(function (snapshot) {
                $this.setState({modal: false});
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
                        const user = new UserModel(uid, userDB['email_address'], userDB['phone_number'],
                            userDB['first_name'], userDB['last_name'], userDB['country'], userDB['state'], userDB['city']);
                        SessionModel.get().setUser(user);
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
            dismissKeyboard();
        });
    }

    register() {
        this.props.navigator.push({title: 'RegisterScreen', index: 3})
    }

    recover() {
    }

    submitEmailPhone() {
        this.refs.PasswordField.focus();
    }

    onChangePassword(text) {
        this.setState({password: text});
    }

    onChangeEmailPhone(text) {
        this.setState({emailphone: text});
    }

    closeModal() {
        this.setState({modal: false});
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
                <View style={style.launchScreenToplevel}>
                    <LoadingModal visible={this.state.modal} close={this.closeModal}/>
                    <StatusBar backgroundColor={palette.indigoDark2}/>
                    <View style={[styles.pad, {flex: 0.5}]}/>
                    <View style={[styles.container, {flex: 3}]}>
                        {this.components.wireLogoLarge}
                    </View>
                    <View style={[styles.pad, {flex: 0.1}]}/>
                    <View style={[styles.container, {flex: 2, alignSelf: 'stretch'}]}>
                        <BarebonesTextInput ref='EmailPhoneField' placeholder='Email or phone number'
                                            onSubmitEditing={this.submitEmailPhone}
                                            placeholderTextColor={palette.white}
                                            onChangeText={this.onChangeEmailPhone}
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
                                            onChangeText={this.onChangePassword}
                                            style={{
                                                fontSize: 16,
                                                height: 40,
                                                width: 150,
                                                textAlign: 'center',
                                                color: palette.white
                                            }}
                                            onSubmitEditing={this.login}/>
                    </View>
                    <View style={[styles.container, {flex: 2}]}>
                        <View style={[styles.container, {flex: 5, alignSelf: 'stretch'}]}>
                            <StateButton onPress={this.login} style={styles.button}
                                         pressedStyle={styles.buttonPressed} textStyle={styles.buttonText}
                                         textPressedStyle={styles.buttonTextPressed} text='Login'/>
                        </View>
                        <View style={{flex: 1}}/>
                    </View>
                    <View style={[styles.container, {flex: 1.5, flexDirection: 'row'}]}>
                        <View style={stylesLocal.smallButtonContainer}>
                            <StateButton onPress={this.register} style={stylesLocal.smallButton}
                                         pressedStyle={stylesLocal.smallButtonPressed}
                                         textStyle={stylesLocal.smallButtonText}
                                         textPressedStyle={stylesLocal.smallButtonTextPressed} text='Register'/>
                        </View>
                        <View style={stylesLocal.smallButtonContainer}>
                            <StateButton onPress={this.recover} style={stylesLocal.smallButton}
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
