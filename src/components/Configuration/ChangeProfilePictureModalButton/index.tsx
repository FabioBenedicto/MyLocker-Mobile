import React, { useState } from 'react'
import { Pressable, Text } from 'react-native'

import { useDarkTheme } from '../../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'

export interface ChangeProfilePictureModalButtonProps {
  onPress: () => void
  text: string
}

export function ChangeProfilePictureModalButton({
  onPress,
  text,
}: ChangeProfilePictureModalButtonProps) {
  const { darkTheme } = useDarkTheme()
  const [isPressed, setIsPressed] = useState(false)
  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: darkTheme
            ? isPressed
              ? '#3a3939'
              : '#202124'
            : isPressed
            ? '#f1f1f1'
            : '#ffffff',
          borderColor: darkTheme ? '#434547' : '#DBDBDB',
        },
      ]}
      onPressIn={() => {
        setIsPressed(true)
      }}
      onPressOut={() => {
        setIsPressed(false)
      }}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          {
            color: darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY,
          },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}
