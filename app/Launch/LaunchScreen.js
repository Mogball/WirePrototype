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

import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import StateButton from './Components/StateButton';
import palette from '../Style/Palette';
import style from './Style';

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
            <Text style={style.vireLogo}>Vire</Text>
        );
    }

    _register() {
        this.requestAnimationFrame(() => {
            this.props.navigator.push({title: 'RegisterScreen', index: 3});
        });
    }

    _login() {
        this.requestAnimationFrame(() => {
            this.props.navigator.push({title: 'LoginScreen', index: 2});
        });
    }

    render() {
        return (
            <View style={style.launchScreenToplevel}>
                <StatusBar backgroundColor={palette.indigoDark2}/>
                <View style={style.vireLogoContainer}>
                    {this.components.wireLogoLarge}
                </View>
                <View style={style.buttonAssembly}>
                    <View style={style.buttonContainer}>
                        <StateButton onPress={this._register}
                                     style={style.bigBtn}
                                     textStyle={style.bt}
                                     elevation={4} color={palette.p1pA}
                                     text='Register'/>
                    </View>
                    <View style={style.buttonContainer}>
                        <StateButton onPress={this._login}
                                     style={style.bigBtn}
                                     textStyle={style.bt}
                                     elevation={4} color={palette.seafloor}
                                     text='Login'/>
                    </View>
                </View>
            </View>
        );
    }

}

ReactMixin(LaunchScreen.prototype, TimerMixin);

// TODO get rid of this once dependency has been released
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