import {
    StyleSheet
} from 'react-native';

const palette = require('../../Style/Palette').default;

export default StyleSheet.create({

    toplevel: {
        backgroundColor: palette.indigo,
        alignSelf: 'stretch',
        height: 50,
        elevation: 2,
        justifyContent: 'center',
        flexDirection: 'row'
    }

});