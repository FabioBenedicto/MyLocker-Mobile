import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: GLOBAL.FONT_SIZE.LG,
    textAlign: 'center',
  },
  textContainer: {
    gap: 10,
  },
  text: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    textAlign: 'center',
  },
})
