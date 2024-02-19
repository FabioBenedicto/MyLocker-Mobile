import React, { forwardRef } from 'react'
import { TextInput, type TextInputProps } from 'react-native'

import { styles } from './styles'
import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'
import { useDarkTheme } from '../../hooks/useDarkTheme'

export interface MyCharInputProps extends TextInputProps {}

export const MyCharInput = forwardRef<TextInput, MyCharInputProps>(
  function MyCharInput({ ...props }, ref) {
    const { darkTheme } = useDarkTheme()

    return (
      <TextInput
        ref={ref}
        maxLength={1}
        cursorColor={
          darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
        }
        style={[
          styles.textInput,
          {
            backgroundColor: darkTheme
              ? DARK.COLORS.TEXT_INPUT_BACKGROUND
              : LIGHT.COLORS.TEXT_INPUT_BACKGROUND,
            color: darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY,
          },
        ]}
        {...props}
      />
    )
  },
)
