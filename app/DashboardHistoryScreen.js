import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    ListView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    StatusBar
} from 'react-native';

import {
    Card, ListItem, Icon
} from 'react-native-elements';

import AntiKeyboard from './AntiKeyboard';
import StateButton from './StateButton';
import BarebonesTextInput from './BarebonesTextInput';

export default class DashboardHistoryScreen extends Component {

    static get defaultProps() {
        return {title: 'DashboardHistoryScreen'};
    }

    constructor(props) {
        super(props);
        this._handleSearch = this._handleSearch.bind(this);
        this._renderRow = this._renderRow.bind(this);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
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
    }

    _handleSearch() {
        DISMISS_KEYBOARD();
    }

    _renderRow(rowData) {
        var date = formatDate(new Date(rowData[1]));
        var delta = formatMoney(rowData[0], true);
        var balance = formatMoney(rowData[2]);
        var sign = delta.substr(0, 1);
        delta = delta.substring(1);
        return (
            <View style={{
                flex: 1, margin: 10,
                marginBottom: 0
            }}>
                <Text style={{
                    borderBottomWidth: 1, marginBottom: 2,
                    borderBottomColor: palette.cyprus
                }}>{date}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{
                        flexDirection: 'row', flex: 1,
                        justifyContent: 'space-between'
                    }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={[styles.balance, {fontSize: 16, textAlign: 'center', width: 15}]}>
                                {sign}</Text>
                            <Text style={[styles.balance, {fontSize: 16, textAlign: 'left'}]}>
                                {delta}</Text>
                        </View>
                        <Text style={[styles.balance, {fontSize: 16, textAlign: 'right'}]}>
                            {balance}</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.screen}>
                <StatusBar backgroundColor={palette.blue}/>
                <AntiKeyboard>
                    <View style={styles.headerToolbar}>
                        <Text style={styles.headerTitle}>History</Text>
                        <Icon name='person' color={palette.pureWhite} size={35}
                              containerStyle={{marginRight: 25}}
                              onPress={this.props.dashboard.toggleSideMenu}
                              underlayColor='transparent'/>
                    </View>
                </AntiKeyboard>
                <View style={{flex: 1, alignSelf: 'stretch', alignItems: 'center'}}>
                    <Card flexDirection='row' containerStyle={{elevation: 2, padding: 5}}>
                        <BarebonesTextInput ref='search' placeholder='Search history'
                                            underlineColor={palette.blue} style={{fontSize: 16}}/>
                        <View style={[styles.container, {width: 70, flex: 0}]}>
                            <StateButton style={stylesLocal.searchButton}
                                         pressedStyle={stylesLocal.searchButtonP}
                                         textStyle={stylesLocal.searchButtonT}
                                         textPressedStyle={stylesLocal.searchButtonTP}
                                         onPress={this._handleSearch} text='Search'/>
                        </View>
                    </Card>
                    <Card containerStyle={{
                        padding: 1, elevation: 2,
                        margin: 10, paddingBottom: 10, width: 310, marginBottom: 90
                    }}>
                        <ListView initialListSize={1}
                                  keyboardDismissMode='on-drag' keyboardShouldPersistTaps='never'
                                  dataSource={this.state.previousTransactions}
                                  renderRow={this._renderRow}/>
                    </Card>
                </View>
            </View>
        );
    }

}

const stylesLocal = {

    searchButton: [
        styles.button, {
            width: 70,
            height: 40,
            elevation: 6,
            backgroundColor: palette.turquoise
        }
    ],

    searchButtonP: [
        styles.buttonPressed, {
            width: 68,
            height: 38,
            elevation: 4,
            backgroundColor: palette.turquoiseDark
        }
    ],

    searchButtonT: [
        styles.buttonText, {
            fontSize: 16, paddingHorizontal: 0, paddingVertical: 0, color: palette.pureWhite
        }
    ],

    searchButtonTP: [
        styles.buttonTextPressed, {
            fontSize: 16, paddingHorizontal: 0, paddingVertical: 0, color: palette.white
        }
    ]

};

formatComma = function (n, showPlus, c) {
    showPlus = showPlus ? true : false;
    var s = n < 0 ? '—' : '';
    var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c)));
    var j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',');
}

formatMoney = function (n, showPlus, hideDollar) {
    hideDollar = hideDollar ? true : false;
    showPlus = showPlus ? true : false;
    n /= 100;
    var s = n < 0 ? '—' : (showPlus ? '+' : '') + '';
    s += hideDollar ? '' : '$';
    var i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(2)));
    var j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + ',' : '')
        + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + ',')
        + (2 ? '.' + Math.abs(n - i).toFixed(2).slice(2) : '');
};

String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};

const monthMap = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

formatDate = function (date) {
    var hour = date.getHours();
    var minute = date.getMinutes();
    var day = date.getDate();
    var month = date.getMonth();
    return "{0}:{1}{2}, {3} {4}".format(
        hour == 0 ? 12 : hour > 12 ? hour - 12 : hour,
        minute >= 10 ? minute : '0' + minute,
        hour >= 12 ? 'pm' : 'am', monthMap[month], day);
};
