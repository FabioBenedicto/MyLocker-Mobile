import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ProfileScreen } from '../screens/ProfileScreen'
import { ConfigurationScreen } from '../screens/ConfigurationScreen'
import { ApmScreen } from '../screens/ApmScreen'
import { RentLockerScreen } from '../screens/RentLockerScreen'
import { ConfirmRentScreen } from '../screens/ConfirmRentScreen'

import { useDarkTheme } from '../hooks/useDarkTheme'

import { DARK } from '../themes/dark'
import { LIGHT } from '../themes/light'

export type AppStackParamList = {
  ProfileScreen: undefined
  ConfigurationScreen: undefined
  ApmScreen: undefined
  RentLockerScreen: undefined
  ConfirmRentScreen: undefined
}

const AppStack = createNativeStackNavigator<AppStackParamList>()

export function AppRoutes() {
  const { darkTheme } = useDarkTheme()
  return (
    <AppStack.Navigator
      initialRouteName='ProfileScreen'
      screenOptions={{
        headerShown: false,
        animation: 'none',
        contentStyle: {
          backgroundColor: darkTheme
            ? DARK.COLORS.BACKGROUND
            : LIGHT.COLORS.BACKGROUND,
        },
      }}
    >
      <AppStack.Screen name='ProfileScreen' component={ProfileScreen} />
      <AppStack.Screen
        name='ConfigurationScreen'
        component={ConfigurationScreen}
      />
      <AppStack.Screen name='ApmScreen' component={ApmScreen} />
      <AppStack.Screen name='RentLockerScreen' component={RentLockerScreen} />
      <AppStack.Screen name='ConfirmRentScreen' component={ConfirmRentScreen} />
    </AppStack.Navigator>
  )
}
