import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        paddingBottom: 0,
    },

    textContainer: {
        flex: 1,
        marginTop: 30,
        // marginHorizontal: 'auto',
        position: 'absolute',
        left: '5%',
        right: '5%',
    },

    colorContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    flatlist: {
        marginTop: width / 3,
    },

    lockerImage: {
        aspectRatio: 1,
        height: 200,
        width: 'auto',

        alignSelf: 'center',
    },

    flatData: {
        marginBottom: 20,
    },

    line: {
        marginRight: 27,
        marginBottom: 20,
        height: 2,

    },

    flatlistL: {
        marginTop: width / 3,
    },

    lockerImageL: {
        aspectRatio: 0.6,
        height: 100,
        width: 'auto',
        borderRadius: 7.5,

        alignContent: 'space-between',
    },

    flatDataL: {
        marginBottom: 20,
    },

    row: {
        flex: 1,
        justifyContent: 'space-evenly',
    },

    navLockers: {
        position: 'absolute',
        bottom: width / 10 - width / 3,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

});

export default styles;
