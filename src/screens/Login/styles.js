import { StyleSheet } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  teste: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    marginBottom: 80,
  },

  title: {
    fontSize: 30,
    lineHeight: 35,
    color: '#000000',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 20,
    lineHeight: 23,
    color: '#666666',
    marginBottom: 20,
  },

  input: {
    width: 330,
    height: 70,
    borderRadius: 10,
    padding: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },

  linkContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },

  linkText: {
    fontSize: 20,
    color: '#0085FF',
  },

});

export default styles;
