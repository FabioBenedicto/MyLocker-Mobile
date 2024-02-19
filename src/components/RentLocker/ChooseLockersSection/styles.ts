import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../../themes/global'

const TEXT_LENGTH = 186
const TEXT_HEIGHT = 36
const OFFSET = TEXT_LENGTH / 2 - TEXT_HEIGHT / 2
const OFFSET_LONG = TEXT_LENGTH / 2 - TEXT_HEIGHT

export const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: -20,
    marginBottom: 40,
  },
  insideScrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  container: {
    borderRadius: 30,
    padding: 30,
    flexDirection: 'column',
  },
  gridContainer: {
    rowGap: 20,
  },
  firstRowContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: 10,
  },
  yellowLockerSectionsContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  redLockerSectionsContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  blueLockerSectionsContainer: {
    flexDirection: 'row',
  },
  lockerSectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockerSectionText: {
    fontSize: GLOBAL.FONT_SIZE.LG,
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    textAlign: 'center',
    width: 196,
    transform: [{ rotate: '270deg' }],
    marginLeft: -OFFSET,
    marginRight: -OFFSET,
  },
  lockerSectionLongText: {
    fontSize: GLOBAL.FONT_SIZE.LG,
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    textAlign: 'center',
    width: 196,
    transform: [{ rotate: '270deg' }],
    marginLeft: -OFFSET_LONG,
    marginRight: -OFFSET_LONG,
  },
  lockerSectionImage: {
    width: 186,
    height: 186,
  },
})
