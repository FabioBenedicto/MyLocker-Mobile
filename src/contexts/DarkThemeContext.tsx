import React, {
  type ReactNode,
  createContext,
  useState,
  useEffect,
} from 'react'

import { Appearance } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

export type DarkThemeContextType = {
  darkTheme: boolean
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DarkThemeContextProviderProps {
  children: ReactNode
}

export const DarkThemeContext = createContext({} as DarkThemeContextType)

export function DarkThemeContextProvider({
  children,
}: DarkThemeContextProviderProps) {
  const [darkTheme, setDarkTheme] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const isDarkModeSet = await AsyncStorage.getItem('darkTheme')
        if (isDarkModeSet === 'true') {
          return true
        } else if (isDarkModeSet === 'false') {
          return false
        } else {
          return Appearance.getColorScheme() === 'dark'
        }
      } catch (e) {
        console.error(e)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const storeData = async () => {
      try {
        await AsyncStorage.setItem('darkTheme', darkTheme.toString())
      } catch (e) {
        console.error(e)
      }
    }
    storeData()
  }, [darkTheme])

  return (
    <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </DarkThemeContext.Provider>
  )
}
