import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    // marginTop: 120,
    marginBottom: 80,
  },

  title: {
    fontSize: (height / 100) * 4.5,
  },

  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  subtitle: {
    color: '#666666',
    fontSize: (height / 100) * 2.5,
    marginTop: (height / 100) * 0.8,
    textAlign: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  input: {
    width: 50,
    height: 70,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 15,
    shadowColor: '#000',
    fontSize: 30,
    color: '#666666',
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
