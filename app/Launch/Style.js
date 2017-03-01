import {
    StyleSheet,
    Dimensions
} from 'react-native';

import palette from '../Style/Palette';

const screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({

    // LOAD SCREEN -------------------
    loadScreenToplevel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    // LAUNCH SCREEN -----------------
    launchScreenToplevel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: palette.indigo
    },

    vireLogoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    vireLogo: {
        fontSize: 100,
        fontWeight: '500',
        color: palette.white
    },

    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        height: 55,
        marginBottom: 25
    },

    buttonAssembly: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingTop: 60
    },

    bt: {
        textAlign: 'center',
        fontSize: 24,
        color: palette.white,
        fontWeight: '500',
    },

    btp: {
        textAlign: 'center',
        fontSize: 24,
        color: palette.white,
        fontWeight: '500'
    },

    bigBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 210,
        height: 50,
        borderRadius: 25,
    },

    bigBtnP: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 210,
        height: 50,
        borderRadius: 25,
    },

    // LOGIN SCREEN -------------
    loadingModalToplevel: {
        flex: 1,
        backgroundColor: palette.grey3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    loadingModalDisplay: {
        width: 305,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loadingIndicator: {
        height: 80
    }

});
