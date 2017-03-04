import React, {Component} from 'react';
import {
    View,
    ListView,
    StyleSheet,
    Text
} from 'react-native';

import styles from './StoreScreenModules/StoreScreenStyle';
import Row from './StoreScreenModules/Row';
import Header from './StoreScreenModules/SearchActionBar';
import LoadView from './LoadView';
import HeaderBar from './HeaderBar';

export default class StoreScreen extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{"name": "Yolo"}, {"name": "Yolo"}]),
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderBar title="Store"/>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(data) => <Row {...data} />}
                    renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
                    renderHeader={() => <Header />}
                />
            </View>
        );
    }

    renderPlaceholder() {
        return (
            <View style="styles.container">
                <HeaderBar title="Store"/>
                <LoadView/>
            </View>
        );
    }

}
