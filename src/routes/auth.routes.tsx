import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { LoginScreen } from '../screens/LoginScreen'
import { VerifyEmailScreen } from '../screens/VerifyEmailScreen'
import { CreatePasswordScreen } from '../screens/CreatePasswordScreen'
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen'

import { useDarkTheme } from '../hooks/useDarkTheme'

import { DARK } from '../themes/dark'
import { LIGHT } from '../themes/light'

export type AuthStackParamList = {
  LoginScreen: undefined
  VerifyEmailScreen: undefined
  CreatePasswordScreen: undefined
  ForgotPasswordScreen: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()

export function AuthRoutes() {
  const { darkTheme } = useDarkTheme()
  return (
    <AuthStack.Navigator
      initialRouteName='LoginScreen'
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
      <AuthStack.Screen name='LoginScreen' component={LoginScreen} />
      <AuthStack.Screen
        name='VerifyEmailScreen'
        component={VerifyEmailScreen}
      />
      <AuthStack.Screen
        name='CreatePasswordScreen'
        component={CreatePasswordScreen}
      />
      <AuthStack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  )
}
