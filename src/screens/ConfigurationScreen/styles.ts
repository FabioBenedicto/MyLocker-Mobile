import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  changeProfilePictureModalContainer: {
    width: '100%',
    padding: 30,
    borderRadius: 20,
    gap: 20,
  },
  changeProfilePictureModalButtonContainer: {
    gap: 10,
  },

  changePasswordModalContainer: {
    width: '100%',
    padding: 30,
    borderRadius: 20,
    gap: 20,
  },
  changePasswordModalTitle: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: GLOBAL.FONT_SIZE.LG,
  },
  changePasswordModalInputContainer: {
    gap: 10,
  },
  linkContainer: {
    marginLeft: 10,
  },
  linkText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    color: '#0085FF',
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 40,
  },
  header: {
    marginTop: 20,
    gap: 40,
  },
  back: {
    alignSelf: 'flex-start',
  },
  profileContainer: {
    gap: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  profileTextContainer: {
    gap: 5,
  },
  name: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
    textAlign: 'center',
  },
  email: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    textAlign: 'center',
  },
  section: {
    borderRadius: 10,
  },
  darkThemeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
  darkThemeInnerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingRight: 20,
  },
  darkThemeText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
  },
  switch: {
    height: 20,
  },
  signOutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    marginBottom: 40,
    gap: 5,
  },
  signOutText: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    color: '#FF0000',
  },
})
