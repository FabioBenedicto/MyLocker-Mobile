import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  lockerModalContainer: {
    padding: 30,
    borderRadius: 20,
    gap: 25,
  },
  lockerModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  lockerImageContainer: {
    borderRadius: 8,
  },
  lockerImage: {
    width: 35,
    height: 60,
  },
  lockerModalHeaderTextContainer: {
    gap: 5,
  },
  lockerModalHeaderTitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
  },
  lockerModalHeaderSubtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: 18,
    lineHeight: 21.6,
  },
  line: {
    borderBottomWidth: 1,
  },
  lockerModalMain: {
    gap: 5,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 40,
  },
  header: {
    marginTop: 20,
    gap: 40,
  },
  back: {
    alignSelf: 'flex-start',
  },
  textContainer: {
    gap: 5,
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    textAlign: 'center',
  },
})
