import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Text,
  ListView,
  Switch,
  TextInput,
  StatusBar
} from 'react-native';

import {
  Icon
} from 'react-native-elements';

import AntiKeyboard from './AntiKeyboard';
import StateButton from './StateButton';

export default class DashboardMainScreen extends Component {

  _handeChange(text) {
    this._textInput.setNativeProps({text: 'foo'});
  }
  static get defaultProps() {
    return {title: 'DashboardMainScreen'};
  }
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._handleSwitch = this._handleSwitch.bind(this);
    this._handleButton = this._handleButton.bind(this);
    this._focusMoney = this._focusMoney.bind(this);
    this._mainButtonIn = this._mainButtonIn.bind(this);
    this._mainButtonOut = this._mainButtonOut.bind(this);
    this.state = {
      moneyInputValue: '0.00',
      actualMoneyValue: 0,
      switchedToSell: false,
      mainButtonPressed: false,
      QR_NFC: false // false --> QR, true --> NFC
    };
  }

  _handleChange(text) {
    var cleanedText = '';
    if (text) {
      cleanedText = text.replace(/\D/g, '');
    }
    var intValue = parseInt(cleanedText);
    this.setState({
      actualMoneyValue: intValue,
      moneyInputValue: formatMoney(intValue, false, true)
    });
  }
  _handleSwitch(value) {
    this.setState({QR_NFC: value});
    DISMISS_KEYBOARD();
  }
  _handleButton() {
    this.setState({switchedToSell: !this.state.switchedToSell});
  }
  _focusMoney() {
    this.refs.money.focus();
  }
  _mainButtonIn() {
    this.setState({mainButtonPressed: true});
  }
  _mainButtonOut() {
    this.setState({mainButtonPressed: false});
  }

  render() {
    return (
      <AntiKeyboard>
        <View style={styles.screen}>
          <StatusBar backgroundColor={palette.blue}/>
          <View style={styles.headerToolbar}>
            <Text style={styles.headerTitle}>Wire</Text>
            <Icon name='person' color={palette.pureWhite} size={35}
              containerStyle={{marginRight: 25}}
              onPress={this.props.dashboard.toggleSideMenu}
              underlayColor='transparent'/>
          </View>
            <View style={{flex: 2}}>
              <View style={[styles.container, {flexDirection: 'row'}]}>
                <Text style={[this.state.QR_NFC ?
                  stylesLocal.commsDisabled : stylesLocal.commsEnabled,
                  {right: 15}]}>QR</Text>
                <Switch
                  onValueChange={this._handleSwitch}
                  style={{paddingHorizontal: 5}}
                  value={this.state.QR_NFC}/>
                <Text style={[this.state.QR_NFC ?
                  stylesLocal.commsEnabled : stylesLocal.commsDisabled,
                  {left: 15}]}>Tap</Text>
              </View>
              <TouchableWithoutFeedback onPress={this._focusMoney}>
                <View style={stylesLocal.transferAmountBox}>
                  <Text style={stylesLocal.dollarSign}>$</Text>
                  <TextInput ref='money' autoCapitalize='none' autoCorrect={false}
                    keyboardType='numeric' maxLength={10} returnKeyType='done'
                    value={this.state.moneyInputValue} onChangeText={this._handleChange}
                    underlineColorAndroid={palette.teal}
                    style={[styles.balance, {fontSize: 30, width: 162,
                      paddingBottom: 5, height: 50}]}
                    selectTextOnFocus>
                  </TextInput>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 2, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.container}>
                  <StateButton
                    onPress={this._handleButton}
                    style={stylesLocal.switchButton}
                    pressedStyle={stylesLocal.switchButtonPressed}
                    textStyle={stylesLocal.switchButtonText}
                    textPressedStyle={stylesLocal.switchButtonTextPressed}
                    text={this.state.switchedToSell ? 'Send' : 'Receive'}/>
                </View>
                <View style={styles.container}>
                  <StateButton onPressIn={this._mainButtonIn} onPressOut={this._mainButtonOut}
                    onPress={() => {}} style={stylesLocal.mainButton}
                    pressedStyle={stylesLocal.mainButtonPressed}
                    textStyle={stylesLocal.mainButtonText}
                    textPressedStyle={stylesLocal.mainButtonTextPressed}
                    text={this.state.switchedToSell ? 'Receive' : 'Send'}/>
                </View>
                <View style={styles.container}>
                </View>
              </View>
            </View>
        </View>
      </AntiKeyboard>
    );
  }

}

const stylesLocal = {

  commsEnabled: {
    textAlign: 'center',
    fontSize: 24,
    color: palette.moneyGreen,
    fontWeight: '700'
  },
  commsDisabled: {
    textAlign: 'center',
    fontSize: 24,
    color: palette.cyprus,
    fontWeight: '300'
  },

  transferAmountBox: {
    height: 60,
    width: 195,
    backgroundColor: palette.pureWhite,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },

  dollarSign: [
    styles.balance, {
      paddingLeft: 4,
      right: -2,
      fontSize: 30
    }
  ],

  mainButton: [
    styles.button, {
      width: 150, height: 150, borderRadius: 75,
      backgroundColor: palette.crush
    }
  ],
  mainButtonPressed: [
    styles.buttonPressed, {
      width: 148, height: 148, borderRadius: 74,
      backgroundColor: palette.crushDark
    }
  ],
  mainButtonText: [
    styles.buttonText, {
      paddingHorizontal: 0, paddingVertical: 0, color: palette.pureWhite
    }
  ],
  mainButtonTextPressed: [
    styles.buttonTextPressed, {
      paddingHorizontal: 0, paddingVertical: 0
    }
  ],

  switchButton: [
    styles.button, {
      width: 70, height: 70, borderRadius: 35
    }
  ],
  switchButtonPressed: [
    styles.buttonPressed, {
      width: 68, height: 68, borderRadius: 34
    }
  ],
  switchButtonText: [
    styles.buttonText, {
      paddingHorizontal: 0, paddingVertical: 0, fontSize: 15, color: palette.pureWhite
    }
  ],
  switchButtonTextPressed: [
    styles.buttonTextPressed, {
      paddingHorizontal: 0, paddingVertical: 0, fontSize: 15
    }
  ]

};
