import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../../themes/global'

const TEXT_LENGTH = 340
const TEXT_HEIGHT = 36
const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2

export const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: -20,
  },
  insideScrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  container: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 60,
  },
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftRoomText: {
    fontSize: GLOBAL.FONT_SIZE.LG,
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    textAlign: 'center',
    width: 340,
    transform: [{ rotate: '270deg' }],
    marginLeft: -OFFSET,
    marginRight: -OFFSET + 10,
  },
  gridContainer: {
    flexDirection: 'column',
    rowGap: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    columnGap: 5,
  },
  innerGridContainer: {
    flexDirection: 'column',
    rowGap: 10,
  },
  innerRowContainer: {
    flexDirection: 'row',
    columnGap: 5,
  },
  lockerImageContainer: {
    borderRadius: 8,
  },
  lockerImage: {
    height: 60,
    width: 35,
  },
  rentedFilter: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  rightRoomText: {
    fontSize: GLOBAL.FONT_SIZE.LG,
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    textAlign: 'center',
    width: 340,
    transform: [{ rotate: '270deg' }],
    marginLeft: -OFFSET + 10,
    marginRight: -OFFSET,
  },
})
