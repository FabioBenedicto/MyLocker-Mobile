import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    /* borderRadius: 10,
    marginTop: 70,
    padding: 10, */

    marginTop: (height / 100) * 9,
    // marginBottom: (height / 100) * 9.5,

    marginBottom: (height / 100) * 6,

    width: '100%',

    borderRadius: (height / 100) * 2,

    padding: (height / 100) * 1.6,

    backgroundColor: '#0085FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  txt: {
    color: 'white',
    fontSize: (height / 100) * 3.6,
    fontWeight: '500',
  },
});

export default styles;
