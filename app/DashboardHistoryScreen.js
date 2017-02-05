import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableNativeFeedback
} from 'react-native';

const DISMISS_KEYBOARD = require('dismissKeyboard');

export default class DashboardHistoryScreen extends Component {

  static get defaultProps() {
    return {title: 'DashboardHistoryScreen'};
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      // STUB data
      previousTransactions: ds.cloneWithRows([
        [-122, 333745456754, 4622123],
        [-766, 333659324523, 4622245],
        [-766, 333657545664, 4623011],
        [-424, 332928888895, 4623435],
        [-471, 332878888895, 4623906],
        [285000, 332678888895, 4338906],
        [-15543, 332439888895, 4354449],
        [-1623, 331439888895, 4356072],
        [-345, 331434867891, 4356417],
        [6523, 331434567891, 4349894],
        [-1244, 331234567891, 4351138]
      ])
    };

    this.components = {};
    this.components.transactionHistory = (
      <View style={{flex: 1, backgroundColor: '#F2F2F2', elevation: 3}}>
        <ListView
          keyboardDismissMode='on-drag' keyboardShouldPersistTaps='never'
          dataSource={this.state.previousTransactions}
          renderRow={(rowData) => {
              var date = formatDate(new Date(rowData[1]));
              var delta = formatMoney(rowData[0], true);
              var balance = formatMoney(rowData[2]);
              var sign = delta.substr(0, 1);
              delta = delta.substring(1);
              return (
                <View style={{flex: 1, margin: 10}}>
                  <View style={{borderBottomWidth: 1, marginBottom: 2,
                    borderBottomColor: '#555555'}}>
                    <Text>{date}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                      <View style={{width: 15}}>
                        <Text style={[styles.balance,
                          {fontSize: 16, textAlign: 'center'}]}>
                            {sign}
                          </Text>
                      </View>
                      <Text style={[styles.balance,
                        {fontSize: 16, textAlign: 'left'}]}>
                        {delta}
                      </Text>
                    </View>
                    <View>
                      <Text style={[styles.balance,
                        {fontSize: 16, textAlign: 'right'}]}>
                          {balance}
                      </Text>
                    </View>
                  </View>
                </View>
              );
          }}/>
      </View>
    );
  }

  render() {
    return(
      <View style={styles.screen}>
        <AntiKeyboard>
          <View style={[styles.headerToolbar,
            {flexDirection: 'row', alignItems: 'center'}]}>
            <View style={{width: 30}}></View>
            <Text style={styles.title}>History</Text>
          </View>
        </AntiKeyboard>
        <AntiView style={{height: 20, alignSelf: 'stretch'}}></AntiView>
        <View style={{flexDirection: 'row', flex: 1}}>
          <AntiView style={{width: 20}}></AntiView>
          <View style={{flex: 1}}>
            <View style={{height: 40, backgroundColor: '#F2F2F2',
              elevation: 3  , flexDirection: 'row', justifyContent: 'space-between',
              alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <TextInput autoCapitalize='none' autoCorrect={false}
                  keyboardType='default' maxLength={64}
                  placeholder='Search history' returnKeyType='done'>
                </TextInput>
              </View>
              <View style={{marginLeft: 2}}>
                <TouchableNativeFeedback onPress={() => {
                  DISMISS_KEYBOARD();
                }}>
                  <View style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Search</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
            <AntiView style={{height: 20}}></AntiView>
            {this.components.transactionHistory}
          </View>
          <AntiView style={{width: 20}}></AntiView>
        </View>
        <View style={{height: 20}}></View>
      </View>
    );
  }

}

// Some silly classes to get rid of the keyboard
class AntiKeyboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => {DISMISS_KEYBOARD()}}>
        {this.props.children}
      </TouchableWithoutFeedback>
    );
  }

}

class AntiView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AntiKeyboard>
        <View style={this.props.style}></View>
      </AntiKeyboard>
    );
  }

}

const styles = StyleSheet.create({

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#D02035',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: 'rgba(100, 20, 20, 0.2)'
  },

  screen: {
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  balance: {
    textAlign: 'center',
    fontSize: 20,
    color: '#33AA88',
    fontWeight: '400'
  },

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

  searchButton: {
    elevation: 8,
    backgroundColor: '#25A278',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    right: 3
  },

  searchButtonText: {
    color: '#F2F2F2',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6
  }

});

formatComma = function(n, showPlus, c) {
  showPlus = showPlus ? true : false;
  var s = n < 0 ? '—' : '';
  var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
  var j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + ',' : '')
    + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',');
}

formatMoney = function(n, showPlus) {
  showPlus = showPlus ? true : false;
  n /= 100;
  var s = n < 0 ? '—$' : (showPlus ? '+' : '') + '$';
  var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(2)));
  var j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + ',' : '')
    + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',')
    + (2 ? '.' + Math.abs(n - i).toFixed(2).slice(2) : '');
 };

String.prototype.format = function() {
  var args = arguments;
  return this.replace(/{(\d+)}/g, function(match, number) {
    return typeof args[number] != 'undefined' ? args[number] : match;
  });
};

const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

 formatDate = function(date) {
   var hour = date.getHours();
   var minute = date.getMinutes();
   var day = date.getDate();
   var month = date.getMonth();
   return "{0}:{1}{2}, {3} {4}".format(
     hour == 0 ? 12 : hour > 12 ? hour - 12 : hour,
     minute >= 10 ? minute : '0' + minute,
     hour >= 12 ? 'pm' : 'am', monthMap[month], day);
 };
