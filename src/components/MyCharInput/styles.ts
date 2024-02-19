import { StyleSheet, Platform } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    width: 50,
    height: 70,
    textAlign: 'center',
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
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
})
