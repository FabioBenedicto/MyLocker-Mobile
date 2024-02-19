import React from 'react'
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  type ScrollViewProps,
  Platform,
  StatusBar,
  useWindowDimensions,
  Keyboard,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

export interface MyScrollViewProps extends ScrollViewProps {
  isTherekeyboard?: boolean
}

export function MyScrollView({ isTherekeyboard, ...props }: MyScrollViewProps) {
  return (
    <>
      {isTherekeyboard ? (
        <ScrollViewWithKeyboard {...props} />
      ) : (
        <ScrollViewWithoutKeyboard {...props} />
      )}
    </>
  )
}

function ScrollViewWithKeyboard({ ...props }: ScrollViewProps) {
  const statusBarHeight = getStatusBarHeight()
  const screenHeight = useWindowDimensions().height - statusBarHeight

  const hideKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={hideKeyboard}>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1, height: screenHeight }}
          {...props}
        />
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

function ScrollViewWithoutKeyboard({ ...props }: ScrollViewProps) {
  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      {...props}
    />
  )
}
