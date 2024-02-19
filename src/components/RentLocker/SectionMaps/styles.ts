import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 40,
  },
  gridContainer: {
    flexDirection: 'column',
    rowGap: 10,
  },
  firstRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yellowLockerSectionContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  redLockerSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 3,
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  blueLockerSectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 5,
  },
  lockerSectionImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  actualSection: {
    backgroundColor: 'rgba(110, 200, 239, 0.58)',
    borderRadius: 10,
    position: 'absolute',
    height: 55,
    width: 50,
    transform: [{ translateX: -2.5 }, { translateY: -5 }],
  },
})
