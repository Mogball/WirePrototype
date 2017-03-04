import {
    StyleSheet,
    Dimensions
} from 'react-native';

import palette from '../../Style/Palette';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({

    preview: {
        height: screenWidth,
        width: screenWidth
    },

    toplevel: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'stretch'
    },

    send: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.cyanLight1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    receive: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.customTeal,
        justifyContent: 'center',
        alignItems: 'center'
    },

    placeholder: {
        height: screenWidth,
        alignSelf: 'stretch',
        backgroundColor: palette.black
    },

    loadView: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: palette.white
    }

});