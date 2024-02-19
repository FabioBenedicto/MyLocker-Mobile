import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
  },
  rightText: {
    flex: 1,
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    textAlign: 'right',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'baseline',
    gap: 5,
  },
  colorSquare: {
    width: 14,
    height: 14,
    borderRadius: 4,
  },
})
