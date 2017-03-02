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

import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import LoadingModal from './Components/LoadingModal';
import StateButton from './Components/StateButton';
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
        this.renderPlaceholder = this.renderPlaceholder.bind(this);

        this.state = {
            emailphone: "",
            password: "",
            modal: false,
            loading: false,

            placeholder: true
        };

        this.components = {};
        this.components.wireLogoLarge = (
            <Text style={style.vireLogo}>Vire</Text>
        );
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({placeholder: false});
        });
    }

    login() {
        // TODO Disable the email/phone and password fields and the login button during the request
        this.requestAnimationFrame(() => {
            this.setState({modal: true, loading: true});
            InteractionManager.runAfterInteractions(() => {
                let emailphone = this.state.emailphone;
                let password = this.state.password;
                const ref = SessionModel.get().getFirebase().database().ref('/users');
                const type = emailphone.indexOf('@') >= 0 ? 'email_address' : 'phone_number';
                let navigator = this.props.navigator;
                let $this = this;
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
                            const user = new UserModel(uid, userDB['email_address'], userDB['phone_number'],
                                userDB['first_name'], userDB['last_name'], userDB['country'], userDB['state'], userDB['city']);
                            SessionModel.get().setUser(user);
                            $this.setState({modal: false, loading: false});
                            navigator.push({title: 'Dashboard', index: 4});
                        } else {
                            // TODO display login failed message "Incorrect email/phone number or password"
                            $this.setState({loading: false});
                        }
                    } else {
                        // TODO display login failed message "Incorrect email/phone number or password"
                        $this.setState({loading: false});
                    }
                }, function (error) {
                    // TODO indicate error to the client
                    alert(error);
                    $this.setState({modal: false, loading: false});
                });
                dismissKeyboard();
            });
        });
    }

    register() {
        this.requestAnimationFrame(() => {
            this.props.navigator.push({title: 'RegisterScreen', index: 3});
        });
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
        this.requestAnimationFrame(() => {
            this.setState({modal: false, loading: false});
        });
    }

    render() {
        if (this.state.placeholder) {
            return this.renderPlaceholder();
        }

        return (
            <View style={style.launchScreenToplevel}>
                <LoadingModal loading={this.state.loading} visible={this.state.modal} close={this.closeModal}/>
                <StatusBar backgroundColor={palette.indigoDark2}/>
                <View style={style.vireLogoContainer}>
                    {this.components.wireLogoLarge}
                </View>
                <View style={style.loginAssembly}>

                    <View style={[styles.container, {flex: 1, alignSelf: 'stretch'}]}>
                        <BarebonesTextInput ref='EmailPhoneField' placeholder='Email or phone number'
                                            onSubmitEditing={this.submitEmailPhone}
                                            placeholderTextColor={palette.white}
                                            onChangeText={this.onChangeEmailPhone}
                                            style={style.textInputStyle}/>
                        <BarebonesTextInput ref='PasswordField' placeholder='Password'
                                            secureTextEntry={true} returnKeyType={'done'}
                                            placeholderTextColor={palette.white}
                                            onChangeText={this.onChangePassword}
                                            style={style.textInputStyle}
                                            onSubmitEditing={this.login}/>
                    </View>
                    <View style={style.itemContainer}>
                        <View style={style.loginButtonContainer}>
                            <StateButton onPress={this.login}
                                         style={style.bigBtn}
                                         textStyle={style.bt}
                                         elevation={4}
                                         color={palette.seafloor}
                                         text='Login'/>
                        </View>
                    </View>
                    <View style={style.smallButtonContainer}>
                        <View style={style.smallButtonInnerContainer}>
                            <StateButton onPress={this.register}
                                         style={style.smallButton}
                                         textStyle={style.smallButtonText}
                                         elevation={3}
                                         color={palette.tealLight1}
                                         text='Register'/>
                        </View>
                        <View style={style.smallButtonInnerContainer}>
                            <StateButton onPress={this.recover}
                                         style={style.smallButton}
                                         textStyle={style.smallButtonText}
                                         elevation={3}
                                         color={palette.tealLight1}
                                         text='Recover'/>
                        </View>
                    </View>

                </View>
            </View>
        );
    }

    renderPlaceholder() {
        return (
            <View style={style.launchScreenToplevel}>
                <StatusBar backgroundColor={palette.indigoDark2}/>
                <View style={style.vireLogoContainer}>
                    {this.components.wireLogoLarge}
                </View>
                <View style={style.loginAssembly}/>
            </View>
        );
    }

}

ReactMixin(LoginScreen.prototype, TimerMixin);