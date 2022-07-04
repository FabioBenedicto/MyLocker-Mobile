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

    flatlist: {
        marginTop: 120,
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
        marginBottom: 30,
    },

    flatlistL: {
        marginTop: 120,
    },

    lockerImageL: {
        aspectRatio: 0.6,
        height: 100,
        width: 'auto',
        borderRadius: 7.5,

        alignContent: 'space-between',
    },

    flatDataL: {
        marginRight: 27,
        marginBottom: 20,
    },

});

export default styles;
