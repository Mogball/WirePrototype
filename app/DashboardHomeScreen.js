import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Image
} from 'react-native';

const WIRE_LOGO_LARGE = require('./img/wire_logo_large.png');

// This screen does not work properly in landscape mode
export default class DashboardHomeScreen extends Component {

  static get defaultProps() {
    return {title: 'DashboardHomeScreen'};
  }

  constructor(props) {
    super(props);
    this.state = {
      // STUB data
      accountBalance: 4622123,
      pointBalance: 54232,
      firstLastName: 'Emeritus Pachementyke'
    };
  }

  render() {
    return(
      <View style={styles.screen}>
        <View style={[styles.headerToolbar,
          {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{width: 30}}></View>
          <Text style={styles.title}>Home</Text>
        </View>
        <View style={{flexDirection: 'row', flex: 1, marginTop: 20, marginLeft: 20, marginRight: 20}}>
          <View style={{flex: 1}}>

            <View style={{marginBottom: 20}}>
              <Text style={styles.name}>{this.state.firstLastName}</Text>
            </View>

            <View style={{backgroundColor: '#F2F2F2', height: 130,
              alignSelf: 'stretch', elevation: 3, marginBottom: 20}}>
              <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                <Text style={styles.label}>Balance</Text>
                <Text style={styles.balance}>
                  {formatMoney(this.state.accountBalance)}
                </Text>
              </View>
            </View>

            <View style={{backgroundColor: '#F2F2F2', height: 130,
              alignSelf: 'stretch', elevation: 3}}>
              <View style={{flex: 1, alignSelf: 'stretch', justifyContent: 'center'}}>
                <Text style={styles.label}>Points</Text>
                <Text style={styles.balance}>
                  {formatComma(this.state.pointBalance)}
                </Text>
              </View>
            </View>

            <View style={{height: 20}}></View>
            <View style={{flex: 1.7, backgroundColor: '#F2F2F2', elevation: 3}}>

            </View>
            <View style={{height: 20}}></View>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',
              justifyContent: 'center', backgroundColor: '#F2F2F2', elevation: 3}}>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableNativeFeedback>
                  <View style={styles.buttonDepositWithdraw}>
                    <Text style={styles.buttonDepositWithdrawText}>Withdraw</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableNativeFeedback>
                  <View style={styles.buttonDepositWithdraw}>
                    <Text style={styles.buttonDepositWithdrawText}>Deposit</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
            <View style={{height: 20}}></View>
          </View>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    flex: 1
  },

  name: {fontSize: 20, textAlign: 'center',
    fontWeight: '500', borderBottomWidth: 2,
    borderBottomColor: '#D02035', paddingBottom: 3},

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#D02035',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: 'rgba(100, 20, 20, 0.2)'
  },

  label: {fontSize: 20, borderBottomWidth: 1,
    borderBottomColor: '#555555', marginBottom: 3},

  headerToolbar: {
    height: 60,
    backgroundColor: "#EEEEEE",
    alignSelf: 'stretch',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD'
  },

  balance: {
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
    elevation: 4,
    paddingHorizontal: 10,
    paddingVertical: 15
  },

    buttonDepositWithdraw: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#D02035',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 10,
      elevation: 5,
      width: 80
    },

    buttonDepositWithdrawText: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
      fontWeight: '500'
    }

});
