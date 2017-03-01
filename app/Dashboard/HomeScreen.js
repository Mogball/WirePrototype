//Vire org
import React, {Component} from 'react';

// https://www.npmjs.com/package/react-native-smart-sudoku-grid


import {
    ScrollView,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    Alert,
    ListView,
} from 'react-native';

import {
    List,
    ListItem
} from 'react-native-elements';

import palette from '../Style/Palette';
import { accList, dataList } from './HomeScreenActionPanel/testValue';
import VireGridView from './HomeScreenActionPanel/VireGridView';

import SudokuGrid from 'react-native-smart-sudoku-grid'
import CornerLabel from 'react-native-smart-corner-label'
import styles from './HomeScreenStyle';
import StateButton from '../StateButton';



let columnCount = 3;

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            accountBalance: 1000000,
            pointBalance: 54232,
            firstLastName: user ? user.firstName + " " + user.lastName : "Zoe Brown"
        };

        let personName = (
            <View>
              <Text style={stylesLocal.name}>{this.state.firstLastName}</Text>
            </View>
        );

        let balanceItem = (
            <View style={stylesLocal.card}>
                <Text style={stylesLocal.blockTitle}>Balance</Text>
                <Text style={stylesLocal.balance}>
                    {formatMoney(this.state.accountBalance)}
                </Text>
                <View style={{borderBottomWidth: 1, borderBottomColor: palette.cyprus, margin: 5}}/>
                <Text style={stylesLocal.blockTitle}>Points</Text>
                <Text style={stylesLocal.balance}>
                    {formatComma(this.state.pointBalance)}
                </Text>
            </View>
        );

        let withdrawDepositItem = (
            <View style={{flexDirection: 'row', margin: 50, marginBottom: 0, marginTop: 20, paddingBottom: 0}}>
                <View style={styles.container}>
                    <View style={[styles.container, {width: 50, height: 50}]}>
                        <StateButton onPress={() => {
                        }}
                                     style={stylesLocal.button} pressedStyle={stylesLocal.buttonPressed}/>
                    </View>
                    <Text style={stylesLocal.buttonText}>Withdraw</Text>
                </View>
                <View style={styles.container}>
                    <View style={[styles.container, {width: 50, height: 50}]}>
                        <StateButton onPress={() => {
                        }}
                                     style={[stylesLocal.button, {backgroundColor: palette.lightTeal}]}
                                     pressedStyle={[stylesLocal.buttonPressed, {backgroundColor: palette.lightTealDark}]}/>
                    </View>
                    <Text style={stylesLocal.buttonText}>Deposit</Text>
                </View>
            </View>
        );

        let toHistoryScreenItem = (
            <View style={{elevation: 2, marginLeft: 0, marginRight: 0}}>
                <List containerStyle={{marginTop: 12, marginBottom: 20, borderWidth: 1}}>
                    <ListItem title='History'
                              component={TouchableNativeFeedback}
                              onPress={this.toHistory}
                              titleContainerStyle={{height: 50, justifyContent: 'center'}}
                              titleStyle={{fontSize: 18, color: palette.cyprus, fontWeight: '500'}}/>
                </List>
            </View>
        );

        // Define list view
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.screenItems = ds.cloneWithRows([
            personName,
            balanceItem,
            withdrawDepositItem,
            toHistoryScreenItem
        ]);
    }


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ScrollView style={{marginTop: 44 + 20, backgroundColor: '#fff',}}>
              <View>
                <ListView
                    dataSource={this.screenItems}
                    renderRow={(item) => {
                        return item;
                    }}/>
                </View>

                <VireGridView data = {accList} title = "Account"/>
                <VireGridView data = {dataList} title = "Services"/>
            </ScrollView>

        );
    }

    renderLoadingView() {
        return (
            <View>
                <Text>
                    Loading content...
                </Text>
            </View>
        );
    }
}
