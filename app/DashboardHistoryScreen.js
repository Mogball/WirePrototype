import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text
} from 'react-native';

export default class DashboardHistoryScreen extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      previousTransactions: ds.cloneWithRows([
        [-122, 333745456754],
        [-766, 333659324523],
        [-766, 333657545664],
        [-424, 332928888895],
        [-471, 332878888895],
        [285000, 332678888895],
        [-15543, 332439888895],
        [-1623, 331439888895],
        [-345, 331434867891],
        [6523, 331434567891],
        [-1244, 331234567891]
      ])
    };
  }

  render() {
    return(
      <View style={{left: 10, flex: 4, borderWidth: 1, borderRadius: 5, width: 300}}>
        <ListView
          dataSource={this.state.previousTransactions}
          renderRow={(rowData) =>
            <View style={{flex: 1, margin: 10, borderWidth: 1, borderColor: '#D02035', borderRadius: 3, width: 200}}>
              <Text>{formatDate(new Date(rowData[1]))}</Text>
              <Text style={[styles.balance, {fontSize: 16, textAlign: 'left'}]}>{formatMoney(rowData[0], true)}</Text>
            </View>
          }/>
      </View>
    );
  }

}

const styles = StyleSheet.create({

  balance: {
    textAlign: 'center',
    fontSize: 20,
    color: '#33AA88',
    fontWeight: '400'
  }

});

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
