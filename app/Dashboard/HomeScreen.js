//Vire org
 import React, {Component} from 'react';

 import {
     Text,
     View,
     ListView

 } from 'react-native';

 import styles from './HomeScreenStyle';


 export default class HomeScreen extends Component {
     constructor(props) {
         super(props);
         this.state = {loaded: true};
     }





     render() {
       if (!this.state.loaded) {
          return this.renderLoadingView();
       }


       return (
           <View style={styles.toplevel}>

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

 }
