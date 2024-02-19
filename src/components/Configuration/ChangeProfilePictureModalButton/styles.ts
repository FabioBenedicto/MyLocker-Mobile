import { StyleSheet, Platform } from 'react-native'
import { GLOBAL } from '../../../themes/global'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 4, height: 6 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  text: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
  },
})
