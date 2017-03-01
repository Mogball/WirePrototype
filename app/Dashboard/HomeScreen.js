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
import AccountHeader from './HomeScreenActionPanel/AccountHeader';
import SudokuGrid from 'react-native-smart-sudoku-grid'
import CornerLabel from 'react-native-smart-corner-label'
import styles from './HomeScreenStyle';
import StateButton from '../StateButton';



let columnCount = 3;

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        let user = SessionModel.get().getUser();
        this.state = {
            loaded: true,
            accountBalance: 1000000,
            pointBalance: 54232,
            firstLastName: user ? user.firstName + " " + user.lastName : "Zoe Brown"
        };
    }


    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
          <ScrollView style={{marginTop: 44 + 20, backgroundColor: '#fff',}}>
              <AccountHeader/>
              <VireGridView data = {accList} title = "Account"/>
              <VireGridView data = {dataList} title = "Services"/>
          </ScrollView>
        );
    }

    renderLoadingView() {
        return (<View><Text>Loading content...</Text></View>);
    }
}
