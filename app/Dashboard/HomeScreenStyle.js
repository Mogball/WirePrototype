/**
 * Created by ultim on 2017-02-27.
 */
 import {
     StyleSheet,
     Dimensions
 } from 'react-native';

 export default StyleSheet.create({
     preview: {
         height: Dimensions.get('window').width,
         width: Dimensions.get('window').width
     },
     toplevel: {
         flex: 1,
         justifyContent: 'flex-start',
         alignItems: 'center',
     }
 });
