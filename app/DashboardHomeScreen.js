import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ListView
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
      accountBalance: 446541622123,
      pointBalance: 54232,
      firstLastName: 'Emeritus Pachementyke'
    };

    var personName = (
      <View style={{margin: 20}}>
        <Text style={styles.name}>{this.state.firstLastName}</Text>
      </View>
    );
    var balanceItem = (
      <View style={{backgroundColor: '#F2F2F2', height: 100,
        elevation: 3, marginLeft: 20, marginRight: 20}}>
        <Text style={styles.label}>Balance</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.balance}>
            {formatMoney(this.state.accountBalance)}
          </Text>
        </View>
      </View>
    );
    var pointsItem = (
      <View style={{backgroundColor: '#F2F2F2', height: 100,
        elevation: 3, margin: 20}}>
        <Text style={styles.label}><Text style={{color: '#D02035'}}>Wire</Text> Points</Text>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.balance}>
            {formatComma(this.state.pointBalance)}
          </Text>
        </View>
      </View>
    );
    var withdrawDepositItem = (
      <View style={{flexDirection: 'row', alignItems: 'center',
        justifyContent: 'center', height: 100, marginLeft: 30, marginRight: 30,
        marginBottom: 20}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableNativeFeedback>
            <View style={[styles.buttonDepositWithdraw,
              {backgroundColor: '#FE8B01'}]}>
              <Text style={styles.buttonDepositWithdrawText}>WITHDRAW</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableNativeFeedback>
            <View style={[styles.buttonDepositWithdraw,
              {backgroundColor: '#45AD00'}]}>
              <Text style={styles.buttonDepositWithdrawText}>DEPOSIT</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.screenItems = ds.cloneWithRows([
      personName,
      balanceItem,
      pointsItem,
      withdrawDepositItem
    ]);
  }

  render() {
    return(
      <View style={styles.screen}>
        <View style={[styles.headerToolbar,
          {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{width: 30}}></View>
          <Text style={styles.title}>Home</Text>
        </View>
        <ListView
          dataSource={this.screenItems}
          renderRow={(item) => {return item;}}/>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    backgroundColor: '#EDEDED'
  },

  name: {fontSize: 28, textAlign: 'center',
    fontWeight: '100', borderBottomWidth: 2,
    borderBottomColor: '#D02035', paddingBottom: 3},

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#EEEEEE',
  },

  label: {fontSize: 24, borderBottomWidth: 2, backgroundColor: '#FAFAFA',
    borderBottomColor: '#667066', marginBottom: 3, fontWeight: '500',
    paddingLeft: 7},

  headerToolbar: {
    height: 60,
    backgroundColor: "#D02035",
    alignSelf: 'stretch',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#CE1E33'
  },

  balance: {
    fontSize: 36,
    textAlign: 'center',
    color: '#33AA88',
    fontWeight: '100',
    bottom: 4
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
      paddingVertical: 20,
      borderRadius: 10,
      elevation: 4,
      width: 100
    },

    buttonDepositWithdrawText: {
      textAlign: 'center',
      fontSize: 16,
      color: 'white',
      fontWeight: '500'
    }

});
