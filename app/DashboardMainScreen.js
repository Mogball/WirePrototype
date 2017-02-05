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
  TextInput
} from 'react-native';

export default class DashboardMainScreen extends Component {

  _handeChange(text) {
    this._textInput.setNativeProps({text: 'foo'});
  }
  static get defaultProps() {
    return {title: 'DashboardMainScreen'};
  }
  constructor(props) {
    super(props);
    this.state = {
      moneyInputValue: '0.00',
      actualMoneyValue: 0,
      payPressed: false,
      switchPressed: false,
      switchedToSell: false,
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

  render() {
    const buttonStyle = this.state.payPressed ? styles.holdButtonPressed : styles.holdButton;
    const buttonTextStyle = this.state.payPressed ? styles.buttonTextPressed : styles.buttonText;
    const switchButtonStyle = this.state.switchPressed ? styles.switchButtonPressed : styles.switchButton;
    const switchTextStyle = this.state.switchPressed ? styles.switchTextPressed : styles.switchText;
    return (
      <TouchableWithoutFeedback onPress={DISMISS_KEYBOARD}>
        <View style={styles.screen}>
          <View style={styles.headerToolbar}>
            <Image source={WIRE_LOGO_LARGE} style={styles.logoSmall}/>
          </View>
          <View style={{flex: 1, alignSelf: 'stretch'}}>

            <View style={{flex: 2}}>
              <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={[this.state.QR_NFC ? styles.commsDisabled : styles.commsEnabled, {right: 15}]}>QR</Text>
                <Switch // switch value should save the user's option
                        // should also get an API that allows for a larger switch
                  onValueChange={(value) => {this.setState({QR_NFC: value}); DISMISS_KEYBOARD()}}
                  style={{paddingHorizontal: 5}}
                  value={this.state.QR_NFC}/>
                <Text style={[this.state.QR_NFC ? styles.commsEnabled : styles.commsDisabled, {left: 15}]}>Tap</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => {this.refs.money.focus()}}>
                  <View style={{height: 50, width: 200,
                    backgroundColor: '#F5F5F5', elevation: 3,
                    flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={[styles.balance, {paddingLeft: 4, right: -2}]}>$</Text>
                    <View style={{flex: 1, top: 1, marginRight: 20}}>
                      <TextInput ref='money' autoCapitalize='none' autoCorrect={false}
                        keyboardType='numeric' maxLength={10} returnKeyType='done'
                        value={this.state.moneyInputValue}
                        onChangeText={(text) => {
                          this._handleChange(text);
                        }} selectTextOnFocus
                        style={styles.balance}>
                      </TextInput>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>

            <View style={{flex: 1, alignItems: 'center'}}>
              <TouchableWithoutFeedback
                onPressIn={() => {this.setState({payPressed: true})}}
                onPressOut={() => {this.setState({payPressed: false})}}
                onPress={() => {DISMISS_KEYBOARD()}}>
                <View style={buttonStyle}>
                  <Text style={buttonTextStyle}>{this.state.switchedToSell ? 'Receive' : 'Send'}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableWithoutFeedback
                onPressIn={() => {this.setState({switchPressed: true})}}
                onPressOut={() => {this.setState({switchPressed: false, switchedToSell: !this.state.switchedToSell})}}
                onPress={() => {DISMISS_KEYBOARD()}}>
                <View style={[switchButtonStyle, {right: 110 * (this.state.switchedToSell ? -1 : 1), bottom: 20}]}>
                  <Text style={switchTextStyle}>{this.state.switchedToSell ? 'Send' : 'Receive'}</Text>
                </View>
              </TouchableWithoutFeedback>
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
    backgroundColor: '#EDEDED',
    flex: 1,
  },

  balance: {
    textAlign: 'left',
    fontSize: 30,
    color: '#33AA88',
    fontWeight: '400',
    lineHeight: 30
  },

  logoSmall: {
    width: 130,
    height: 54
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

  holdButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D00035',
    elevation: 10,
    width: 150,
    height: 150,
    borderRadius: 75
  },

  holdButtonPressed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B53040',
    elevation: 4,
    width: 150,
    height: 150,
    borderRadius: 75
  },

  switchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D00035',
    elevation: 10,
    width: 64,
    height: 64,
    borderRadius: 32
  },

  switchButtonPressed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B53040',
    elevation: 4,
    width: 64,
    height: 64,
    borderRadius: 32
  },

  buttonText: {
    textAlign: 'center',
    fontSize: 26,
    color: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: '500'
  },

  buttonTextPressed: {
    textAlign: 'center',
    fontSize: 26,
    color: '#EEEEEE',
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontWeight: '300'
  },

  switchText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500'
  },

  switchTextPressed: {
    textAlign: 'center',
    fontSize: 14,
    color: '#EEEEEE',
    fontWeight: '300'
  },

  commsEnabled: {
    textAlign: 'center',
    fontSize: 24,
    color: '#33AA88',
    fontWeight: '700'
  },

  commsDisabled: {
    textAlign: 'center',
    fontSize: 24,
    color: '#334433',
    fontWeight: '300'
  }

});
