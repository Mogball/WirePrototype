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

import SudokuGrid from 'react-native-smart-sudoku-grid'
import CornerLabel from 'react-native-smart-corner-label'
import styles from './HomeScreenStyle';
import StateButton from '../StateButton';
import image_google from '../img/g.png'
import SessionModel from '../Models/SessionModel';

const accList = [
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    }

];

const dataList = [
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
    {
        icon: image_google,
        title: 'cash',
    },
];

let columnCount = 3;


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        let user = SessionModel.get().getUser();
        this.state = {
            loaded: true,
            accountBalance: 1000000,
            pointBalance: 54232,
            firstLastName: user ? user.firstName + " " + user.lastName : "undefined"
        };

        let personName = (
            <View style={{margin: 20}}>
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

                <ListView
                    dataSource={this.screenItems}
                    renderRow={(item) => {
                        return item;
                    }}/>

                <View style={{height: 30, paddingLeft: 10, backgroundColor: '#E1E5E8', justifyContent: 'center',}}>
                    <Text>Account: </Text>
                </View>
                <SudokuGrid
                    containerStyle={{
                        backgroundColor: '#000'
                        ,
                    }}
                    columnCount={columnCount}
                    dataSource={accList}
                    renderCell={this._renderGridCell}
                />

                <View style={{height: 30, paddingLeft: 10, backgroundColor: '#E1E5E8', justifyContent: 'center',}}>
                    <Text>Service: </Text>
                </View>
                <SudokuGrid
                    containerStyle={{
                        backgroundColor: '#000'
                        ,
                    }}
                    columnCount={columnCount}
                    dataSource={dataList}
                    renderCell={this._renderGridCell}
                />

            </ScrollView>

        );
    }

    renderLoadingView() {
        return (
            <View>
                <Text>
                    Loading movies...
                </Text>
            </View>
        );
    }

    _renderGridCell = (data, index, list) => {
        return (
            <TouchableHighlight underlayColor={'#eee'} onPress={ this._onPressCell.bind(this, data, index) }>
                <View style={{
                    overflow: 'hidden',
                    justifyContent: 'center', alignItems: 'center', height: 100,
                    borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#eee',
                    borderRightWidth: (index + 1) % columnCount ? StyleSheet.hairlineWidth : 0,
                }}>
                    <Image source={data.icon} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
                    <Text>{data.title}</Text>
                    { index == 11 ?
                        <CornerLabel
                            cornerRadius={54}
                            style={{backgroundColor: 'red', height: 24,}}
                            textStyle={{color: '#fff',}}>
                            30% off
                        </CornerLabel> : index == 10 ?
                        <CornerLabel
                            alignment={'right'}
                            cornerRadius={54}
                            style={{backgroundColor: 'red', height: 24,}}
                            textStyle={{color: '#fff', fontSize: 12,}}>
                            Yolo
                        </CornerLabel> : null
                    }
                </View>
            </TouchableHighlight>
        )
    };

    _onPressCell(data, index) {
        Alert.alert('clicked ' + data.title)
    }


}
