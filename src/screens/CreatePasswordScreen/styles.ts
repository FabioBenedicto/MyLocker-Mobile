import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 20,
    gap: 40,
  },
  back: {
    alignSelf: 'flex-start',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  main: {
    gap: 20,
  },
  textContainer: {
    gap: 5,
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
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
  inputGroup: {
    gap: 10,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
})
