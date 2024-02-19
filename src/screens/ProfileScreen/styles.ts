import { StyleSheet } from 'react-native'
import { GLOBAL } from '../../themes/global'

export const styles = StyleSheet.create({
  lockerModalContainer: {
    borderRadius: 20,
    gap: 25,
    padding: 30,
  },
  lockerModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  lockerImageContainer: {
    borderRadius: 8,
  },
  lockerImage: {
    width: 35,
    height: 60,
  },
  lockerModalHeaderTitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
  },
  lockerModalHeaderSubtitle: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: 18,
    lineHeight: 21.6,
  },
  line: {
    borderBottomWidth: 1,
  },
  lockersInformationContainer: {
    gap: 5,
  },

  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    gap: 40,
  },
  innerContainer: {
    gap: 40,
  },
  header: {
    gap: -20,
  },
  background: {
    height: 120,
    marginHorizontal: -20,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 20,
    marginRight: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 15,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileTextContainer: {
    flex: 1,
    gap: 5,
  },
  name: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
  },
  email: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
  },
  main: {
    gap: 40,
  },
  titleContainer: {
    gap: 10,
  },
  title: {
    fontFamily: GLOBAL.FONT_FAMILY.MEDIUM,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.LINE_HEIGHT.LG,
  },
  noLockerContainer: {
    alignSelf: 'center',
    gap: 10,
  },
  noLockerImage: {
    width: 230,
    height: 200,
  },
  noLockerText: {
    fontFamily: GLOBAL.FONT_FAMILY.BOLD,
    fontSize: GLOBAL.FONT_SIZE.SM,
    lineHeight: GLOBAL.LINE_HEIGHT.SM,
    color: '#717171',
  },
  lockerContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 30,
    gap: 15,
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
  },
  lockerTextContainer: {
    gap: 5,
  },
  number: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: GLOBAL.FONT_SIZE.LG,
    lineHeight: GLOBAL.FONT_SIZE.LG,
  },
  rentedAt: {
    fontFamily: GLOBAL.FONT_FAMILY.REGULAR,
    fontSize: 18,
    lineHeight: 21.6,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
})
