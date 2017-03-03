import {
    StyleSheet
} from 'react-native';

const palette = require('../../Style/Palette.js').default;

export default StyleSheet.create({

    toplevel: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },

    popup: {
        width: 300,
        height: 300,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
    },

    cancelContainer: {

    },

    textContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    confirmContainer: {

    },

    confirmButtonToplevel: {
        height: 60,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#ccc',
        width: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },

    confirmButtonText: {
        fontSize: 18,
        fontWeight: '900',
        color: palette.customCyan
    },

    cancelButtonToplevel: {
        width: 300,
        padding: 6,
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },

    cancelButton: {
        width: 38,
        height: 38,
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center'
    },

    amountDisplayText: {
        color: palette.tealLight1,
        fontSize: 35,
        fontWeight: '200'
    }

});