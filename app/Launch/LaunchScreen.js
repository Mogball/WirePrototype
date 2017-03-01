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

import StateButton from '../StateButton';
import palette from '../Style/Palette';

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
            <Text style={{fontSize: 100, fontWeight: '500', color: palette.white}}>Vire</Text>
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
            <View style={[styles.screen, {backgroundColor: palette.indigo}]}>
                <StatusBar backgroundColor={palette.indigoDark2}/>
                <View style={{flex: 0.5}}/>
                <View style={[styles.container, {flex: 3}]}>
                    {this.components.wireLogoLarge}
                </View>
                <View style={{flex: 0.1}}/>
                <View style={[styles.container, {flex: 1.2, alignSelf: 'stretch'}]}>
                    <StateButton onPress={this._register}
                                 style={[stylesLocal.btn1, {backgroundColor: palette.p1pA}]}
                                 pressedStyle={[stylesLocal.btn1p, {backgroundColor: palette.p1pA}]}
                                 textStyle={styles.buttonText}
                                 textPressedStyle={styles.buttonTextPressed}
                                 text='Register'/>
                </View>
                <View style={[styles.container, {flex: 1.2}]}>
                    <View style={[styles.container, {flex: 5}]}>
                        <StateButton onPress={this._login} pressedStyle={stylesLocal.btn1p}
                                     style={stylesLocal.btn1} textStyle={styles.buttonText}
                                     textPressedStyle={styles.buttonTextPressed}
                                     text='Login'/>
                    </View>
                    <View style={{flex: 1}}/>
                </View>
                <View style={{flex: 1.5}}/>
            </View>
        );
    }

}

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
        fontWeight: '500'
    },

    buttonTextPressed: {
        textAlign: 'center',
        fontSize: 24,
        color: palette.whiteDark,
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

    blockTitle: {
        color: palette.cyprus, fontSize: 20,
        padding: 0, margin: 0, marginBottom: 2, fontWeight: '500'
    }

});

stylesLocal = {

    btn1: [
        styles.button, {
            width: 210,
            height: 50,
            borderRadius: 25
        }
    ],

    btn1p: [
        styles.buttonPressed, {
            width: 208,
            height: 48,
            borderRadius: 24
        }
    ]

};