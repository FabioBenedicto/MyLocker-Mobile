import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 15,
  },
  text: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: GLOBAL.FONT_SIZE.MD,
    textAlign: 'center',
    lineHeight: 30,
  },
})
