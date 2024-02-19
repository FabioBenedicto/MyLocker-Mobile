import { StyleSheet, Platform } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'space-between',
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
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
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
  lockerContainer: {
    padding: 30,
    borderRadius: 25,
    gap: 20,
  },
  lockerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: 15,
  },
  lockerImageContainer: {
    borderRadius: 8,
  },
  lockerImage: {
    height: 60,
    width: 35,
  },
  lockerHeaderTextContainer: {
    gap: 5,
  },
  number: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
  },
  price: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: 22,
    lineHeight: 26.4,
  },
  lockerMain: {
    gap: 5,
  },
  priceContainer: {
    gap: 15,
  },
  priceInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtotalText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD,
    lineHeight: GLOBAL.LINE_HEIGHT.MD,
  },
  discountText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
  },
  totalText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.MD,
    lineHeight: GLOBAL.LINE_HEIGHT.MD,
  },
  line: {
    borderColor: '#B0B0B0',
    borderBottomWidth: 1,
    borderStyle: Platform.OS === 'ios' ? 'solid' : 'dashed',
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
})
