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
    Alert,
} from 'react-native';

import SudokuGrid from 'react-native-smart-sudoku-grid'
import CornerLabel from 'react-native-smart-corner-label'
import styles from './HomeScreenStyle';
import GridView from 'react-native-grid-view';
import image_google from '../img/g.png'

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
]

var columnCount = 3;




 export default class HomeScreen extends Component {
     constructor(props) {
         super(props);
         this.state = {
           loaded: true,
           dataSource : "Yolo"


         };
     }





     render() {
       if (!this.state.loaded) {
          return this.renderLoadingView();
       }


       return (
           <View style={styles.toplevel}>
           <ScrollView style={{marginTop: 44 + 20, backgroundColor: '#fff', }}>
             <View style={{height: 30, paddingLeft: 10, backgroundColor: '#E1E5E8', justifyContent: 'center', }}>
                 <Text>Services: </Text>
             </View>
             <SudokuGrid
                 containerStyle={{ backgroundColor: '#fff',}}
                 columnCount={columnCount}
                 dataSource={dataList}
                 renderCell={this._renderGridCell}
             />
         </ScrollView>
           </View>
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
                 <View style={{ overflow: 'hidden',
                           justifyContent: 'center', alignItems: 'center', height: 100,
                           borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#eee',
                           borderRightWidth: (index + 1) % columnCount ? StyleSheet.hairlineWidth: 0, }}>
                     <Image source={data.icon} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
                     <Text>{data.title}</Text>
                     { index == 6 ?
                         <CornerLabel
                             cornerRadius={54}
                             style={{backgroundColor: 'red', height: 24,}}
                             textStyle={{color: '#fff', }}>
                             30% off
                         </CornerLabel> : index == 3 ?
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
     }

     _onPressCell (data, index) {
        Alert.alert('clicked ' + data.title)
    }



 }
