import React from 'react'
import { View } from 'react-native'
import { MyStatusBar } from '../../components/MyStatusBar'
import { Loading } from '../../components/Loading'
import { useDarkTheme } from '../../hooks/useDarkTheme'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'
import { styles } from './styles'

export function LoadingScreen() {
  const { darkTheme } = useDarkTheme()
  return (
    <>
      <MyStatusBar
        backgroundColor={
          darkTheme
            ? DARK.COLORS.STATUSBAR_BACKGROUND
            : LIGHT.COLORS.STATUSBAR_BACKGROUND
        }
        barStyle='light-content'
      />
      <View
        style={[
          styles.container,
          {
            backgroundColor: darkTheme
              ? DARK.COLORS.BACKGROUND
              : LIGHT.COLORS.BACKGROUND,
          },
        ]}
      >
        <Loading
          color={
            darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
          }
        />
      </View>
    </>
  )
}
