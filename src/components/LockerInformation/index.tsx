import React from 'react'
import { View, Text } from 'react-native'

import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

export interface LockerInformationProps {
  leftText?: string
  rightText?: string
  colorSquare?: string
}

export function LockerInformation({
  leftText,
  rightText,
  colorSquare,
}: LockerInformationProps) {
  const { darkTheme } = useDarkTheme()
  return (
    <View style={styles.container}>
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
        {leftText}
      </Text>
      {colorSquare ? (
        <View style={styles.rightContainer}>
          <Text
            style={[
              styles.text,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY,
              },
            ]}
          >
            {rightText}
          </Text>
          <View
            style={[styles.colorSquare, { backgroundColor: colorSquare }]}
          />
        </View>
      ) : (
        <Text
          style={[
            styles.rightText,
            {
              color: darkTheme
                ? DARK.COLORS.TEXT_SECONDARY
                : LIGHT.COLORS.TEXT_SECONDARY,
            },
          ]}
        >
          {rightText}
        </Text>
      )}
    </View>
  )
}
