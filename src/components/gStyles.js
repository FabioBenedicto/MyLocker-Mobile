import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const textSize = [(height / 100) * 2.45, (height / 100) * 2.6, (height / 100) * 4.5, (height / 100) * 3.7, (height / 100) * 2.4];

const gStyles = StyleSheet.create({

    container: {
        height: height - 10,
        padding: '5%',
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },

    header: {
        // flex: 1,
        width: '100%',
        height: 30,
        backgroundColor: '#002147',
    },

    container2: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },

    imageContainer: {
        // marginTop: 120,
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },

    image: {
        // marginTop: 120,
    },

    title: {
        fontSize: textSize[2],
        textAlign: 'center',
    },

    bodyContainer: {
        flex: 4,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
    },

    textContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },

    subtitle: {
        color: '#666666',
        fontSize: textSize[1],
        marginTop: (height / 100) * 0.8,
        textAlign: 'center',
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    inputContainer: {
        width: '100%',
        // justifyContent: 'space-between',
        // marginBottom: 10,
    },

    input: {
        width: (width / 100) * 90,
        height: 75,
        borderRadius: 10,
        padding: 23,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 15,

        fontSize: textSize[1],

        shadowColor: '#000',
        elevation: 5,
    },

    linkContainer: {
        marginStart: 10,
        alignSelf: 'flex-start',
    },

    linkText: {
        fontSize: textSize[0],
        color: '#0085FF',
    },

    background: {
        flex: 1,
        backgroundColor: 'gray',
        opacity: 0.15,
    },

    contentContainer: {
        width,

        justifyContent: 'space-between',

        // alignItems: 'center',
        padding: 20,
        // paddingHorizontal: 40,

        backgroundColor: 'white',

        position: 'absolute',
        bottom: 0,

        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,

        shadowColor: '#000',
        elevation: 50,
    },

    contentContainerAlert: {
        width: width - width / 10,

        alignSelf: 'center',

        justifyContent: 'space-between',

        // alignItems: 'center',
        padding: 20,
        bottom: width / 2 + width / 6,
        // paddingHorizontal: 40,

        backgroundColor: 'white',

        position: 'absolute',

        borderRadius: 25,
        // borderTopLeftRadius: 25,

        shadowColor: '#000',
        elevation: 50,
    },

    modalTitle: {
        marginTop: 20,
    },

    modalTextContainer: {
        marginTop: 20,
    },

    modalText: {
        color: '#000000',
    },

    smallTitle: {
        fontSize: textSize[3],
        fontWeight: '500',
    },

    smallSubtitle: {
        fontSize: textSize[4],
    },

    lockerInfo: {
        width: '100%',
    },

    lineInfo: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 5,
    },

    color: {
        width: 15,
        height: 15,
        backgroundColor: '#FF7B7B',
        borderRadius: 5,
        marginLeft: 5,
    },

    line: {
        height: 1,
        width: '100%',
        backgroundColor: '#B0B0B0',
        marginTop: 10,
        marginBottom: 10,
    },

});

export default gStyles;
