import React from 'react'
import { Pressable, type PressableProps, Text } from 'react-native'

import { Loading } from '../Loading'

import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface MyButtonProps extends PressableProps {
  text?: string
  loading?: boolean
  disabled?: boolean
}

export function MyButton({ text, loading, disabled, ...props }: MyButtonProps) {
  const { darkTheme } = useDarkTheme()

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor:
            loading || disabled
              ? darkTheme
                ? DARK.COLORS.BUTTON_LOADING_BACKGROUND
                : LIGHT.COLORS.BUTTON_LOADING_BACKGROUND
              : darkTheme
              ? DARK.COLORS.BUTTON_BACKGROUND
              : LIGHT.COLORS.BUTTON_BACKGROUND,
        },
      ]}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <Loading color='#FFFFFF' />
      ) : (
        <Text
          style={[
            styles.text,
            {
              color: disabled
                ? darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY
                : darkTheme
                ? DARK.COLORS.TEXT_BUTTON
                : LIGHT.COLORS.TEXT_BUTTON,
            },
          ]}
        >
          {text}
        </Text>
      )}
    </Pressable>
  )
}
