import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const gStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    //alignItems: 'center',
  },

  container2: {
    flex: 1,
    //justifyContent: 'center',
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
    fontSize: (height / 100) * 4.5,
  },

  bodyContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  textContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  subtitle: {
    color: '#666666',
    fontSize: (height / 100) * 2.6,
    marginTop: (height / 100) * 0.8,
    textAlign: 'center',
    paddingLeft: '5%',
    paddingRight: '5%',
  },

  inputContainer: {
    width: '100%',
    //justifyContent: 'space-between',
    //marginBottom: 10,
  },

  input: {
    width: (width / 100) * 90,
    height: 70,
    borderRadius: 10,
    padding: 25,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,

    fontSize: (height / 100) * 2.6,

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
    //marginStart: 10,
    alignSelf: 'flex-start',
  },

  linkText: {
    fontSize: 20,
    color: '#0085FF',
  },

});

export default gStyles;
