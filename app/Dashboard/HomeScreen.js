import React, {Component} from 'react';

import {
    ScrollView,
    View,
    Text,
    InteractionManager
} from 'react-native';

import {accList, dataList} from './HomeScreenModules/GridItems';

import styles from './HomeScreenModules/HomeScreenStyle';
import VireGridView from './HomeScreenModules/VireGridView';
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
            <ScrollView>
                <AccountHeader/>
                <VireGridView data={accList} title="Account"/>
                <VireGridView data={dataList} title="Services"/>
            </ScrollView>
        );
    }

    renderPlaceholder() {
        return (
            <View style={styles.loadView}>
                <Text>Loading content...</Text>
            </View>
        );
    }

}