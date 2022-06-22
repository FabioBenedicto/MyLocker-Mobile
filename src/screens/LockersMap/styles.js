import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ratio = height / 541;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    marginTop: (width * -0.03),
    flex: 1,
  },

  title: {
    fontWeight: '600',
  },

  lockerMapContainer: {
    flex: 3,
  },

  lockerMapLine: {
    flex: 1,
    flexDirection: 'row',
  },

  group: {
    flex: 1,
  },

  lockerText: {
    /*     transform: [{ rotate: '-90deg' }],
    alignSelf: 'center', */
  },

  lockerImageContainer: {
    aspectRatio: 1,
    height: 150,

    backgroundColor: '#FDFF97',
  },

  lockerImage: {
    aspectRatio: 1,
    height: 150,
    width: 'auto',

  },

});

export default styles;
