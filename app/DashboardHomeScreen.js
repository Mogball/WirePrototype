import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ListView
} from 'react-native';

import {
  Card,
  Icon
} from 'react-native-elements';

import StateButton from './StateButton';

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
        <Text style={stylesLocal.name}>{this.state.firstLastName}</Text>
      </View>
    );
    var balanceItem = (
      <Card title='Balance' titleStyle={styles.blockTitle}
        containerStyle={{paddingTop: 5, marginTop: 0, height: 100, elevation: 2}}>
        <Text style={stylesLocal.balance}>
          {formatMoney(this.state.accountBalance)}
        </Text>
      </Card>
    );
    var pointsItem = (
      <Card title='Points' titleStyle={styles.blockTitle}
        containerStyle={{paddingTop: 5, height: 100, elevation: 2}}>
        <Text style={stylesLocal.balance}>
          {formatComma(this.state.pointBalance)}
        </Text>
      </Card>
    );
    var withdrawDepositItem = (
      <Card wrapperStyle={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}
        containerStyle={{marginBottom: 20, elevation: 2}}>
        <View style={styles.container}>
          <View style={[styles.container, {width: 50, height: 50}]}>
            <StateButton onPress={() => {}}
              style={stylesLocal.button} pressedStyle={stylesLocal.buttonPressed}/>
          </View>
            <Text style={stylesLocal.buttonText}>Withdraw</Text>
        </View>
        <View style={styles.container}>
          <View style={[styles.container, {width: 50, height: 50}]}>
            <StateButton onPress={() => {}}
              style={[stylesLocal.button, {backgroundColor: palette.lightTeal}]}
              pressedStyle={[stylesLocal.buttonPressed, {backgroundColor: palette.lightTealDark}]}/>
          </View>
            <Text style={stylesLocal.buttonText}>Deposit</Text>
        </View>
      </Card>
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
        <View style={styles.headerToolbar}>
          <Text style={styles.headerTitle}>Home</Text>
          <Icon name='person' color={palette.pureWhite} size={35}
            containerStyle={{marginRight: 25}}
            onPress={this.props.dashboard.toggleSideMenu}
            underlayColor='transparent'/>
        </View>
        <ListView
          dataSource={this.screenItems}
          renderRow={(item) => {return item;}}/>
      </View>
    );
  }

}

const stylesLocal = {

  name: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: '100',
     borderBottomWidth: 2,
     color: palette.cyprusLight,
    borderBottomColor: palette.crush,
    paddingBottom: 3,
    fontWeight: '500'
  },

  balance: [
    styles.balance, {
      fontSize: 30,
      textAlign: 'center',
      paddingVertical: 0,
      bottom: 10
    }
  ],

  button: [
    styles.button, {
      width: 50, height: 50, borderRadius: 25, backgroundColor: '#ff9800',
      elevation: 6
    }
  ],
  buttonPressed: [
    styles.buttonPressed, {
      width: 48, height: 48, borderRadius: 24, backgroundColor: '#fc9500',
      elevation: 4
    }
  ],
  buttonText: {
    fontSize: 16, textAlign: 'center', color: palette.cyprus
  }

};
