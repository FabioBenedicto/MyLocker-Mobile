import React from 'react'
import { TextInput, type TextInputProps } from 'react-native'

import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface MyTextInputNotEditableProps extends TextInputProps {}

export function MyTextInputNotEditable({
  ...props
}: MyTextInputNotEditableProps) {
  const { darkTheme } = useDarkTheme()
  return (
    <TextInput
      editable={false}
      style={[
        styles.textInput,
        {
          backgroundColor: darkTheme
            ? DARK.COLORS.TEXT_INPUT_NOT_EDITABLE_BACKGROUND
            : LIGHT.COLORS.TEXT_INPUT_NOT_EDITABLE_BACKGROUND,
          color: darkTheme
            ? DARK.COLORS.TEXT_SECONDARY
            : LIGHT.COLORS.TEXT_SECONDARY,
        },
      ]}
      {...props}
    />
  )
}
