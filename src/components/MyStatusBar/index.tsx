import React from 'react'
import { View, StatusBar, type StatusBarProps, Platform } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export interface MyStatusBarProps extends StatusBarProps {
  backgroundColor?: string
}

export function MyStatusBar({ backgroundColor, ...props }: MyStatusBarProps) {
  return (
    <View
      style={{
        backgroundColor,
        height: Platform.OS === 'ios' ? getStatusBarHeight() : undefined,
      }}
    >
      <StatusBar backgroundColor={backgroundColor} {...props} />
    </View>
  )
}
