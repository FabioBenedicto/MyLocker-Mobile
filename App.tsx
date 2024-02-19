import React from 'react'
import { Platform } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { ToastProvider } from 'react-native-toast-notifications'
import { DarkThemeContextProvider } from './src/contexts/DarkThemeContext'
import { UserContextProvider } from './src/contexts/UserContext'
import { LockerContextProvider } from './src/contexts/LockerContext'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ToastProvider
      placement='top'
      duration={5000}
      animationDuration={0}
      style={{
        marginTop: Platform.OS === 'ios' ? 20 : 10,
      }}
    >
      <DarkThemeContextProvider>
        <LockerContextProvider>
          <UserContextProvider>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </UserContextProvider>
        </LockerContextProvider>
      </DarkThemeContextProvider>
    </ToastProvider>
  )
}
