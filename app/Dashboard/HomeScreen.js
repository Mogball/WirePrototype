//Vire org
 import React, {Component} from 'react';

import {
     Text,
     View,
     ListView,
     Image

} from 'react-native';

import styles from './HomeScreenStyle';
import GridView from 'react-native-grid-view';

var ITEMS_PER_ROW = 3;



class Movie extends Component {
  render() {
      return (
        <View style={styles.movie} >

          <View >
            <Text
            style={styles.title}
            numberOfLines={3}>{this.props.movie.title}</Text>
            <Text style={styles.year}>{this.props.movie.year}</Text>
          </View>
        </View>
      );
  }
}



 export default class HomeScreen extends Component {
     constructor(props) {
         super(props);
         this.state = {
           loaded: true,
           dataSource: ["Yolo", "haha", "xixi", "Hehe"]

         };
     }





     render() {
       if (!this.state.loaded) {
          return this.renderLoadingView();
       }


       return (
           <View style={styles.toplevel}>
           <GridView
             items={this.state.dataSource}
             itemsPerRow={ITEMS_PER_ROW}
             renderItem={this.renderItem}
             style={styles.listView}
           />
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

     renderItem(item) {
        return <Movie movie={item} />
     }



 }
