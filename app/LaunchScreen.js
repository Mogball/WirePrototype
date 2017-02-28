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

palette = {
    ripple: '#E1F5FE',
    rippleDark: '#E0F3FD',
    crush: '#FE424D',
    crushDark: '#FB3D48',
    seafloor: '#33d0be',
    seafloorDark: '#30cdbb',
    cyprus: '#022D41',
    cyprusLight: '#325D71',
    white: '#FCFCFC',
    whiteDark: '#E0ECF3',
    lightTeal: '#1e88e5',
    lightTealDark: '#1b85e3',
    lightBlue: '#03A9F4',
    lightBlueDark: '#00A5F2',
    blue: '#039BE5',
    tealDark: '#009486',
    aqua: '#72CEDD',
    turquoise: '#00bcd4',
    turquoiseDark: '#00bad1',
    pureWhite: '#FFFFFF',
    moneyGreen: '#33AA88',

    black: '#000000',

    orangeLight: '#ffab40',
    orange: '#fb8c00',

    indigoLight1: '#5c6bc0',
    indigo: '#3f51b5',
    indigoDark1: '#3949ab',
    indigoDark2: '#303f9f',
    indigoDark3: '#283593',
    indigoDark4: '#1a237e',

    tealLight1: '#26a69a',
    teal: '#009688',
    tealDark1: '#00897b',
    tealDark2: '#00796b',

    magentaLight2: '#e56082',
    magentaLight1: '#e060a0',
    magenta: '#e020a0',
    magentaDark1: '#e52082',

    cyanLight1: '#50e7f5',
    cyan: '#3dd5e2',
    cyanDark1: '#3bd2e0',

    brightBlueLight2: '#00e5ff',
    brightBlueLight1: '#4dd0e1',
    brightBlue: '#20c0da',

    customTeal: '#1de9b6',
    customGreen: '#00A594',
    customCyan: '#33aa88',
    customBright: '#30ff90',
    customPurple: '#1560BD',
    customIndigo: '#324AB2',
    customRed: '#e52082',

    p1pA: '#9683ec',
    p1pB: '#1560bd',
    p1pC: '#324ab2',
    p1pD: '#002395',
    p1pE: '#191970',

    p2pA: '#1c39bb',
    p2pB: '#00a594',
    p2pC: '#32117a'
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