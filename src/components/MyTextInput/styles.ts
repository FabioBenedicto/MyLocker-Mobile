import { StyleSheet, Platform } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  textInput: {
    borderRadius: 10,
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    padding: 25,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 4,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  container: {
    borderRadius: 10,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 4,
          height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  secureTextInput: {
    flex: 1,
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    paddingVertical: 25,
    paddingLeft: 25,
  },
  button: {
    padding: 27,
  },
})
