//Vire org
import React, {Component} from 'react';

// https://www.npmjs.com/package/react-native-smart-sudoku-grid


import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    Alert

} from 'react-native';

import SudokuGrid from 'react-native-smart-sudoku-grid'
import CornerLabel from 'react-native-smart-corner-label'

let dataList = null;
let title = "YOLO_NO_TITLE";
let columnCount = 3;

export default class VireGridView extends Component {
    constructor(props) {
        super(props);
        dataList = props.data;
        title = props.title;

    }

    render() {
        return (
                <View>
                <View style={{height: 30, paddingLeft: 10, backgroundColor: '#E1E5E8', justifyContent: 'center',}}>
                    <Text>{title}</Text>
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
