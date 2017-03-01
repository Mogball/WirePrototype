import {
    StyleSheet
} from 'react-native';

const palette = require('../../Style/Palette.js');

export default StyleSheet.create({

    toplevel: {
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    btnContainer: {
        borderRadius: 20,
        height: 80,
        width: 80,
        borderColor: palette.black,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 40
    },

    textContainer: {
        paddingTop: 0,
        paddingBottom: 30
    },

    text: {
        fontSize: 16,
        color: palette.black
    }

});