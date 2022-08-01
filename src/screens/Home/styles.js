import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    container2: {
        flex: 1,
    },

    // header

    header: {
    // transform: [{ translateY: 35 }],
    // flex: 1.1,
        flex: 1,
        alignContent: 'flex-end',
    },

    user: {
        transform: [{ translateY: (height / 100) * 11 }],
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: (height / 100) * 2.5,
        right: (height / 100) * 1,
    },

    textContainer: {
        flex: 1,
        marginLeft: (height / 100) * 1,
        transform: [{ translateY: (height / 100) * 4.5 }/* , { translateX: (height / 100) * 1 } */],
    },

    titleU: {
    // fontSize: 25,
        fontSize: (height / 100) * 4,
        color: 'black',
        alignSelf: 'center',
    },

    subtitleU: {
    // fontSize: 16,
        fontSize: (height / 100) * 2.6,
        color: '#989898',
        alignSelf: 'center',
    },

    imageU: {
        width: (height / 100) * 15,
        height: (height / 100) * 15,
        // mar: 20,
        // transform: [{ translateY: height / 10 }]
    },

    imageU2: {
        width: 22,
        height: 23,
        position: 'absolute',
        top: 10,
        right: 20,
        transform: [{ translateY: (height / 100) * 2.5 }],
    },

    // body

    body: {
        flex: 4,
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    yourLocker: {
        transform: [{ translateY: (height / 100) * 12.3 }],
    },

    title: {
    // fontSize: 25,
        fontSize: (height / 100) * 4,
        fontWeight: '500',
    },

    line: {
        marginTop: (height / 100) * 0.85,
        height: (height / 100) * 0.12,
        width: '100%',
        backgroundColor: 'black',
    },

    nolockerContainer: {
        alignSelf: 'center',
        // marginTop: 35,
        marginTop: (height / 100) * 2,
    },

    colorContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    /* lockerContainer: {
        alignSelf: 'center',
        backgroundColor: '#F2F2F2',
        width: '100%',
        marginTop: 35,
        borderRadius: 10,
    }, */

    text: {
        color: 'gray',
        // fontSize: 16,
        fontSize: (height / 100) * 2.7,
        fontWeight: '500',
        alignSelf: 'center',
        marginTop: (height / 100) * 0.8,
    },

    image: {
        height: (height / 100) * 28,
        width: (height / 100) * 32,
    /* height: 200,
    width: 230, */
    },

    lockerContainer: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

        marginTop: 20,
        backgroundColor: '#F6F6F6',
        borderRadius: 25,
        padding: 30,
        marginHorizontal: 30,
    },

    lockerContainer2: {
        flexDirection: 'row',
    },

    lockerImageContainer: {
        borderRadius: 5,
        width: 45,
        marginRight: 20,
    },

});

export default styles;
