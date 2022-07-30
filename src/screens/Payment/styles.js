import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 0,
    },

    main: {
        flex: 22,
        paddingHorizontal: '5%',
    /* justifyContent: 'space-between', */
    // backgroundColor: 'red',
    },

    lockerContainer: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F6F6',
        borderRadius: 25,
        padding: 30,
        marginHorizontal: 30,
    },

    lockerImageContainer: {
        borderRadius: 5,
    },

    lockerImage: {
    },

    lockerContainer2: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },

    colorContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    priceContainer: {
        marginTop: 25,
        flex: 1.5,
        justifyContent: 'flex-end',
    },

    linePrice: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    titlePrice: {
        fontSize: 25,
    },

    buttonContainer: {
        marginTop: -25,
        padding: '5%',
        paddingTop: '-4%',
    },

});

export default styles;
