import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  input: {
    width: 55,
    height: 70,

    padding: 0,
    paddingLeft: 19,
    fontSize: 30,
    color: '#666666',

  },

});

export default styles;
