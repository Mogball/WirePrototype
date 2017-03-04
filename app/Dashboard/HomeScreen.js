import React, {Component} from 'react';

import {
    ScrollView,
    View,
    Text,
    InteractionManager
} from 'react-native';

import {accList, dataList} from './HomeScreenModules/GridItems';

import styles from './HomeScreenModules/HomeScreenStyle';
import LoadView from './LoadView';
import HeaderBar from './HeaderBar';
import GridView from './HomeScreenModules/GridView';
import AccountHeader from './HomeScreenModules/AccountHeader';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accountBalance: 1000000,
            pointBalance: 54232,
            firstLastName: "Zoe Brown",
            placeholder: true
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({placeholder: false});
        })
    }

    render() {
        if (this.state.placeholder) {
            return this.renderPlaceholder();
        }
        return (
            <View style={styles.toplevel}>
                <HeaderBar title="Home"/>
                <ScrollView>
                    <AccountHeader/>
                    <GridView data={accList} title="Account"/>
                    <GridView data={dataList} title="Services"/>
                </ScrollView>
            </View>
        );
    }

    renderPlaceholder() {
        return (
            <View style={styles.loadView}>
                <HeaderBar title="Home"/>
                <AccountHeader/>
                <LoadView/>
            </View>
        );
    }

}