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
        justifyContent: 'center',
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
        marginBottom: 25,
        bottom: 20
    },

    buttonAssembly: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1.3
    },

    bt: {
        textAlign: 'center',
        fontSize: 24,
        color: palette.white,
        fontWeight: '500',
    },


    bigBtn: {
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
        width: 300,
        height: 190,
        backgroundColor: 'white',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },

    loadingIndicator: {
        height: 80
    },

    loadingIndicatorContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },

    modalButtonToplevel: {
        borderTopWidth: StyleSheet.hairlineWidth,
        height: 60,
        width: 300,
        borderTopColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },

    modalButtonText: {
        fontSize: 18,
        fontWeight: '900'
    },

    loginAssembly: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flex: 1.3,
    },

    loginButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth,
        height: 55,
        marginBottom: 25
    },

    itemContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    smallButtonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch'
    },

    textInputStyle: {
        fontSize: 16,
        height: 40,
        width: 230,
        textAlign: 'center',
        color: palette.white
    },

    modalText: {
        fontSize: 17,
        fontWeight: '400',
        textAlign: 'center'
    },

    smallButtonInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        marginBottom: 40
    },

    smallButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        borderRadius: 3
    },

    smallButtonText: {
        textAlign: 'center',
        fontSize: 16,
        color: palette.white,
        fontWeight: '500'
    },

    // REGISTER SCREEN ----------

    headerTitle: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '500',
        fontSize: 25,
        color: palette.pureWhite,
    },

    headerToolbar: {
        backgroundColor: palette.p1pC,
        alignSelf: 'stretch',
        height: 55,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    backArrowContainer: {
        height: 30,
        width: 30,
        borderRadius: 15,
        marginHorizontal: 16    ,
        alignItems: 'center',
        justifyContent: 'center'
    },

    backIconStyle: {
        color: palette.white
    },

    registerButtonContainer: {
        flex: 0.7,
        alignItems: 'center',
        justifyContent: 'center'
    },

    inputContainer: {
        margin: 5
    },

    itemContainerInput: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    }

});
