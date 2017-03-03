import React, {Component} from 'react';

import {
    TouchableNativeFeedback,
    View,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    StatusBar,
    InteractionManager,
    ActivityIndicator
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import dismissKeyboard from "dismissKeyboard";
import palette from '../Style/Palette';
import style from './Style';

import SessionModel from '../Models/SessionModel';
import UserModel from '../Models/UserModel';
import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import BarebonesTextInput from '../BarebonesTextInput';
import StateButton from './Components/StateButton';
import LoadingModal from './Components/LoadingModal';

const lowercase = new RegExp("(?=.*[a-z])");
const uppercase = new RegExp("(?=.*[A-Z])");
const numeric = new RegExp("(?=.*[0-9])");
/*const special = new RegExp("(?=.*[!@#\$%\^&\*])");
 const length = new RegExp("(?=.{10,})");
 const lengthShort = new RegExp("(?=.{8,})");
 const lengthLong = new RegExp("(?=.{12,})");*/

const getUID = function () {
    const pool = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let uid = "";
    for (let i = 0; i < 12; i++) {
        uid += pool.charAt(Math.floor(Math.random() * pool.length));
    }
    return uid;
};

export default class RegisterScreen extends Component {

    async isExistUID(uid, firebase) {
        let $result = true;
        await firebase.database().ref('/users/' + uid).once('value').then(function (snapshot) {
            $result = !!snapshot.val();
            return $result;
        });
        return $result;
    }

    async isUsedPhone(phone, firebase) {
        let $result = true;
        await firebase.database().ref('/users').once('value').then(function (snapshot) {
            const value = snapshot.val();
            for (const key in value) {
                if (value.hasOwnProperty(key)) {
                    if (value[key]['phone_number'] === phone) {
                        $result = true;
                        return;
                    }
                }
            }
            $result = false;
        });
        return $result;
    }

    static get defaultProps() {
        return {title: 'RegisterScreen'};
    }

    constructor(props) {
        super(props);
        this.back = this.back.bind(this);
        this.register = this.register.bind(this);
        this.registerRequest = this.registerRequest.bind(this);
        this.displayRegisterError = this.displayRegisterError.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.submitPhone = this.submitPhone.bind(this);
        this.submitPassword = this.submitPassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

        this.state = {
            phone: "",
            password: "",
            confirmPassword: "",
            modal: null,
            modalLabel: null
        };
    }

    back() {
        this.requestAnimationFrame(() => {
            this.props.navigator.replacePreviousAndPop({title: 'LoginScreen', index: 2});
        });
    }

    register() {
        dismissKeyboard();
        this.requestAnimationFrame(() => {
            this.setState({
                modal: (
                    <ActivityIndicator style={style.loadingIndicator} size="large"/>
                ), modalLabel: 'CANCEL'
            });
            InteractionManager.runAfterInteractions(this.registerRequest);
        });
    }

    async registerRequest() {
        let phone = this.state.phone;
        let password = this.state.password;
        let confirm = this.state.confirmPassword;
        const firebase = SessionModel.get().getFirebase();
        // TODO Employ proper phone number validation
        if (phone.indexOf('@') < 0 && phone.length > 0) {
            phone = phone.replace(/\D+/g, '');
            if (await this.isUsedPhone(phone, firebase)) {
                // TODO Show account recovery option
                this.displayRegisterError("Phone number is already in use");
            } else {
                if (numeric.test(password) && (lowercase.test(password) || uppercase.test(password))) {
                    if (password.length >= 8) {
                        if (password == confirm) {
                            let uid;
                            do {
                                uid = getUID();
                            } while (await this.isExistUID(uid, firebase));
                            const ref = SessionModel.get().getFirebase().database().ref('/users/' + uid);
                            ref.set({
                                phone_number: phone,
                                password: password,
                                funds: 0,
                                points: 0
                            });
                            const user = new UserModel(uid, null, phone, null, null, null, null, null);
                            SessionModel.get().setUser(user);
                            this.props.navigator.push({title: 'Dashboard', index: 4});
                        } else {
                            // TODO as-you-type validation
                            this.displayRegisterError("Passwords must match")
                        }
                    } else {
                        // TODO as-you-type validation
                        this.displayRegisterError("Password must be at least 8 characters");
                    }
                } else {
                    // TODO as-you-type validation
                    this.displayRegisterError("Password must contain at least one letter and one number");
                }
            }
        } else {
            // TODO as-you-type validation
            this.displayRegisterError("Please enter a valid phone number");
        }
    }

    displayRegisterError(message) {
        this.setState({
            modal: (
                <Text style={style.modalText}>{message}</Text>
            ), modalLabel: 'OK'
        })
    }

    closeModal() {
        this.requestAnimationFrame(() => {
            this.setState({modal: null, modalLabel: null});
        });
    }

    submitPhone() {
        this.refs.passwordField.focus();
    }

    submitPassword() {
        this.refs.confirmPasswordField.focus();
    }

    onChangePhone(text) {
        this.setState({phone: text});
    }

    onChangePassword(text) {
        this.setState({password: text});
    }

    onChangeConfirmPassword(text) {
        this.setState({confirmPassword: text});
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <View style={style.launchScreenToplevel}>
                    <LoadingModal close={this.closeModal}
                                  buttonLabel={this.state.modalLabel}>{this.state.modal}</LoadingModal>
                    <StatusBar backgroundColor={palette.indigoDark2}/>
                    <HeaderToolbar onBack={this.back}/>
                    <View style={style.itemContainerInput}>
                        <View style={style.inputContainer}>
                            <BarebonesTextInput ref='phoneField' placeholder='Phone number'
                                                placeholderTextColor={palette.white}
                                                onChangeText={this.onChangePhone}
                                                onSubmitEditing={this.submitPhone}
                                                style={style.textInputStyle}
                                                underlineColor={palette.customBright}/>
                        </View>
                        <View style={style.inputContainer}>
                            <BarebonesTextInput ref='passwordField' placeholder='Password'
                                                secureTextEntry={true}
                                                placeholderTextColor={palette.white}
                                                onChangeText={this.onChangePassword}
                                                onSubmitEditing={this.submitPassword}
                                                style={style.textInputStyle}
                                                underlineColor={palette.cyanLight1}/>
                        </View>
                        <View style={style.inputContainer}>
                            <BarebonesTextInput ref='confirmPasswordField' placeholder='Confirm password'
                                                secureTextEntry={true}
                                                placeholderTextColor={palette.white}
                                                onChangeText={this.onChangeConfirmPassword}
                                                onSubmitEditing={this.register}
                                                returnKeyType={'done'}
                                                style={style.textInputStyle}
                                                underlineColor={palette.customBright}/>
                        </View>
                    </View>
                    <View style={style.registerButtonContainer}>
                        <StateButton onPress={this.register}
                                     style={style.bigBtn}
                                     textStyle={style.bt}
                                     elevation={4} color={palette.p1pA}
                                     text='Register'/>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

class HeaderToolbar extends Component {
    render() {
        return (
            <View style={style.headerToolbar}>
                <View style={style.backArrowContainer}>
                    <TouchableNativeFeedback onPress={this.props.onBack}
                                             background={TouchableNativeFeedback.Ripple(palette.grey1, true)}>
                        <View style={style.backArrowContainer}>
                            <Icon type="ionicon" name="md-arrow-back" iconStyle={style.backIconStyle} size={32}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <Text style={style.headerTitle}>Register</Text>
            </View>
        );
    }
}

ReactMixin(RegisterScreen.prototype, TimerMixin);
