import React, {Component} from 'react';
import { View, ListView, StyleSheet, Text } from 'react-native';
import styles from './StoreScreenStyle';
import Row from './Store/Row';

export default class StoreScreen extends Component {

  constructor(props) {
    super(props);


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([ {"name" : "Yolo"}, {"name" : "Yoshi"}]),
    };
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    );
  }
}
