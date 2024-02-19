import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
  },
  selectFileContainer: {
    flex: 1,
    padding: 30,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectFileText: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: GLOBAL.FONT_SIZE.LG,
    textAlign: 'center',
  },
  reviewFileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewFileText: {
    flex: 1,
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: 15,
    marginRight: 20,
  },
  buttonContainer: {
    width: 107,
  },
})
