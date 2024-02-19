import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingLeft: 20,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomColor: '#B0B0B0',
  },
  text: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
  },
})
