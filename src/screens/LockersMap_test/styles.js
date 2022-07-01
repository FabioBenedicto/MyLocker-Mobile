import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

  textContainer: {
    flex:1,
    marginTop: 30,
    marginHorizontal: 'auto',
    position: 'absolute',

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
    marginTop: 20,
  },

});

export default styles;
