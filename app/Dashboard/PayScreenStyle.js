import {
    StyleSheet,
    Dimensions
} from 'react-native';

import palette from '../Style/Palette';

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
    },
    send: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.customRed,
        justifyContent: 'center',
        alignItems: 'center'
    },
    receive: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.indigoDark1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholder: {
        height: screenWidth,
        width: screenWidth,
        backgroundColor: palette.whiteDark
    }
});