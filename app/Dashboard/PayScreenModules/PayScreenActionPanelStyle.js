import {
    StyleSheet
} from 'react-native';

const palette = require('../../Style/Palette.js');

export default StyleSheet.create({

    toplevel: {
        backgroundColor: palette.white,
        flex: 1,
        alignSelf: 'stretch'
    },

    btnContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'center'
    }

});