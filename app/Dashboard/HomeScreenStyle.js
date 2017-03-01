/**
 * Created by ultim on 2017-02-27.
 */
 import {
     StyleSheet,
     View,
     Text,
     TouchableNativeFeedback,
     Image,
     ListView
 } from 'react-native';

 import {
     Card,
     Icon,
     List,
     ListItem
 } from 'react-native-elements';

 export default StyleSheet.create({
     blockTitle: {

             textAlign: 'center'
         },

     card: {
         elevation: 2, backgroundColor: palette.pureWhite, padding: 10, margin: 0, marginLeft: 30, marginRight: 30
     },

     name: {
         fontSize: 24,
         textAlign: 'center',
         borderBottomWidth: 2,
         color: palette.cyprusLight,
         borderBottomColor: palette.crush,
         paddingBottom: 3,
         fontWeight: '500'
     },

     balance:  {
             fontSize: 30,
             textAlign: 'center',
             paddingVertical: 0,
             marginTop: 0,
             marginRight: 15
         },

     button:  {
             width: 50, height: 50, borderRadius: 25, backgroundColor: '#ff9800',
             elevation: 6
         },
     buttonPressed: {
             width: 48, height: 48, borderRadius: 24, backgroundColor: '#fc9500',
             elevation: 4
         },
     buttonText: {
         fontSize: 16, textAlign: 'center', color: palette.cyprus
     }
 });
