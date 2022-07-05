import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 5,
    },

    inputContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    input: {
        width: 54,
        height: 70,

        marginBottom: 0,
        padding: 0,
        /* paddingLeft: 15, */
        textAlign: 'center',
        fontSize: 30,
        color: '#666666',

    },

});

export default styles;
