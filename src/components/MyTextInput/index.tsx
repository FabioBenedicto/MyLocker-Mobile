import React, { useState } from 'react'
import {
  TextInput,
  type TextInputProps,
  Platform,
  View,
  Pressable,
} from 'react-native'

import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import { Eye, EyeSlash } from 'phosphor-react-native'

export interface MyTextInputProps extends TextInputProps {
  secureTextEntry?: boolean
}

export function MyTextInput({ secureTextEntry, ...props }: MyTextInputProps) {
  return (
    <>
      {!secureTextEntry ? (
        <TextInputWithoutSecureTextEntry {...props} />
      ) : (
        <TextInputWithSecureTextEntry {...props} />
      )}
    </>
  )
}

function TextInputWithoutSecureTextEntry({ ...props }: TextInputProps) {
  const { darkTheme } = useDarkTheme()

  return (
    <TextInput
      selectTextOnFocus={Platform.OS === 'ios'}
      keyboardAppearance={darkTheme ? 'dark' : 'light'}
      placeholderTextColor={
        darkTheme ? DARK.COLORS.TEXT_PLACEHOLDER : LIGHT.COLORS.TEXT_PLACEHOLDER
      }
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
}

function TextInputWithSecureTextEntry({ ...props }: TextInputProps) {
  const { darkTheme } = useDarkTheme()

  const [isTextVisible, setIsTextVisible] = useState(false)

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkTheme
            ? DARK.COLORS.TEXT_INPUT_BACKGROUND
            : LIGHT.COLORS.TEXT_INPUT_BACKGROUND,
        },
      ]}
    >
      <TextInput
        secureTextEntry={!isTextVisible}
        selectTextOnFocus={Platform.OS === 'ios'}
        keyboardAppearance={darkTheme ? 'dark' : 'light'}
        placeholderTextColor={
          darkTheme
            ? DARK.COLORS.TEXT_PLACEHOLDER
            : LIGHT.COLORS.TEXT_PLACEHOLDER
        }
        cursorColor={
          darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
        }
        style={[
          styles.secureTextInput,
          {
            color: darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY,
          },
        ]}
        {...props}
      />
      <Pressable
        onPress={() => {
          setIsTextVisible(!isTextVisible)
        }}
        style={styles.button}
      >
        {!isTextVisible ? (
          <Eye
            size={20}
            weight='bold'
            color={
              darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
            }
          />
        ) : (
          <EyeSlash
            size={20}
            weight='bold'
            color={
              darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
            }
          />
        )}
      </Pressable>
    </View>
  )
}
