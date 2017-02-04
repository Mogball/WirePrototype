import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';

export default class DashboardHomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {accountBalance: 4453674};
  }

  render() {
    return(
      <View style={styles.screen}>
        <View style={{flex: 2.3, width: 175, alignItems: 'center', alignSelf: 'center'}}>
          <View style={styles.balanceContainer}>
            <Text style={styles.balance}>
              {formatMoney(this.state.accountBalance)}
            </Text>
          </View>
        </View>
        <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableNativeFeedback>
              <View style={styles.buttonDepositWithdraw}>
                <Text style={styles.buttonDepositWithdrawText}>Withdraw</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <TouchableNativeFeedback>
              <View style={styles.buttonDepositWithdraw}>
                <Text style={styles.buttonDepositWithdrawText}>Deposit</Text>
              </View>
            </TouchableNativeFeedback>
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
    backgroundColor: '#F5F5F5',
    flex: 1
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
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 3,
      elevation: 3,
      width: 80
    },

    buttonDepositWithdrawText: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
      fontWeight: '500'
    }

});
