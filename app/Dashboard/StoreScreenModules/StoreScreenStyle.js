import {
    StyleSheet,
    Dimensions
} from 'react-native';

import palette from '../../Style/Palette';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
    },
    placeholder: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: palette.white
    },
    separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        alignSelf: 'stretch',
        backgroundColor: '#8E8E8E',
    }
});
