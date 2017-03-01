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
    Icon,
    List,
    ListItem
} from 'react-native-elements';

import palette from './Style/Palette';

import StateButton from './StateButton';

export default class DashboardHomeScreen extends Component {

    static get defaultProps() {
        return {title: 'DashboardHomeScreen'};
    }

    constructor(props) {
        super(props);
        // Define STUB data
        this.state = {
            accountBalance: 1000000,
            pointBalance: 54232,
            firstLastName: user ? user.firstName + " " + user.lastName : "undefined"
        };

        // Bind functions
        this.toHistory = this.toHistory.bind(this);

        // Define list elements
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
            <View style={{elevation: 2, marginLeft: 40, marginRight: 40}}>
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

    toHistory() {
        this.props.navigator.push({title: 'DashboardHistoryScreen'});
    }

    render() {
        return (
            <View style={styles.screen} >
                <View style={styles.headerToolbar}>
                    <Text style={styles.headerTitle}>Home</Text>
                    <Icon name='person' color={palette.pureWhite} size={35}
                          containerStyle={{marginRight: 25}}
                          onPress={this.props.dashboard.toggleSideMenu}
                          underlayColor='transparent'/>
                </View>

                    <ListView
                        dataSource={this.screenItems}
                        renderRow={(item) => {
                            return item;
                        }}/>
            
            </View>
        );
    }

}

const stylesLocal = {

    blockTitle: [
        styles.blockTitle, {
            textAlign: 'center',
        }
    ],

    card: {
        elevation: 2, backgroundColor: palette.pureWhite, padding: 10, margin: 0, marginLeft: 30, marginRight: 30
    },

    name: {
        fontSize: 24,
        textAlign: 'center',
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
            marginTop: 0,
            marginRight: 15
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
