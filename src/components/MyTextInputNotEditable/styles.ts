import { StyleSheet, Platform } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  textInput: {
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    fontSize: GLOBAL.FONT_SIZE.SM,
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    paddingVertical: 8,
    paddingHorizontal: 10,
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
})
