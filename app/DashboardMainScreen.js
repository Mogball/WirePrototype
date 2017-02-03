import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  Text
} from 'react-native';

const WIRE_LOGO_LARGE = require('./img/wire_logo_large.png');

Number.prototype.formatMoney = function(c, d, t){
var n = this,
    c = isNaN(c = Math.abs(c)) ? 2 : c,
    d = d == undefined ? "." : d,
    t = t == undefined ? "," : t,
    s = n < 0 ? "-" : "",
    i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
    j = (j = i.length) > 3 ? j % 3 : 0;
   return s + (j ? i.substr(0, j) + t : "")
   + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t)
   + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };

export default class DashboardMainScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      payPressed: false,
      switchPressed: false,
      switchedToSell: false,
      accountBalance: 5523456 // BigDecimal, count in cents
    };
  }

  render() {
    const buttonStyle = this.state.payPressed ? styles.holdButtonPressed : styles.holdButton;
    const buttonTextStyle = this.state.payPressed ? styles.buttonTextPressed : styles.buttonText;
    const switchButtonStyle = this.state.switchPressed ? styles.switchButtonPressed : styles.switchButton;
    const switchTextStyle = this.state.switchPressed ? styles.switchTextPressed : styles.switchText;
    return (
      <View style={styles.screen}>
        <View style={styles.headerToolbar}>
          <Image source={WIRE_LOGO_LARGE} style={styles.logoSmall}/>
        </View>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          <View style={{flex: 3}}>
            <View style={{flex: 1}}>

            </View>
            <View style={{flex: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <TouchableNativeFeedback>
                  <View style={styles.buttonDepositWithdraw}>
                    <Text style={styles.buttonDepositWithdrawText}>Withdraw</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <View style={{width: 175, alignItems: 'center'}}>
                <View style={styles.balanceContainer}>
                  <Text style={styles.balance}>
                    {'$'+(this.state.accountBalance/100.0).formatMoney(2)}
                  </Text>
                </View>
              </View>
              <View>
                <TouchableNativeFeedback>
                  <View style={styles.buttonDepositWithdraw}>
                    <Text style={styles.buttonDepositWithdrawText}>Deposit</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={{flex: 3}}>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <TouchableWithoutFeedback
              onPressIn={() => {this.setState({payPressed: true})}}
              onPressOut={() => {this.setState({payPressed: false})}}>
              <View style={buttonStyle}>
                <Text style={buttonTextStyle}>{this.state.switchedToSell ? 'Sell' : 'Pay'}</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableWithoutFeedback
              onPressIn={() => {this.setState({switchPressed: true})}}
              onPressOut={() => {this.setState({switchPressed: false, switchedToSell: !this.state.switchedToSell})}}>
              <View style={[switchButtonStyle, {left: 100, top: 12}]}>
                <Text style={switchTextStyle}>{this.state.switchedToSell ? 'Pay' : 'Sell'}</Text>
              </View>
            </TouchableWithoutFeedback>

          </View>
        </View>
        <View style={styles.footerToolbar}>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flex: 1,
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
    width: 50,
    height: 50,
    borderRadius: 25
  },

  switchButtonPressed: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B53040',
    elevation: 4,
    width: 50,
    height: 50,
    borderRadius: 25
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

  balance: {
    textAlign: 'center',
    fontSize: 20,
    color: '#33AA88',
    fontWeight: '400'
  },

  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    borderRadius: 5,
    elevation: 5,
    paddingHorizontal: 10,
    paddingVertical: 15
  },

  buttonDepositWithdraw: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D02035',
    padding: 5,
    borderRadius: 3,
    elevation: 2,
    width: 80
  },

  buttonDepositWithdrawText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: '500'
  }

});
