import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const ratio = height / 541;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    marginTop: (width * -0.04),
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
    fontSize: width/45,
    transform: [{ rotate: '-90deg' }],
    alignSelf: 'center',

    position: 'absolute',
    top: height/6,
    left: (width/100 - width/100),  
  },

  lockerImageBack: {
    height: 90,
    width: 75,

    backgroundColor: '#FDFF97',

    alignSelf: 'center',

    position: 'absolute',
    top: width/40,
    left: height/7.5,
  },

  lockerImage: {
    aspectRatio: 1,
    height: 100,
    width: 'auto',

    alignSelf: 'center',

    position: 'absolute',
    top: width/40,
    left: height/10,
  },

});

export default styles;
