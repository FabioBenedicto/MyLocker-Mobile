import React, { useEffect, useRef } from 'react'
import { Animated, Easing } from 'react-native'

import { SpinnerGap } from 'phosphor-react-native'

export interface LoadingProps {
  color?: string
}

export function Loading({ color }: LoadingProps) {
  const spinAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start()
  }, [])

  return (
    <Animated.View
      style={{
        transform: [
          {
            rotate: spinAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          },
        ],
        alignSelf: 'center',
      }}
    >
      <SpinnerGap size={30} color={color} weight='bold' />
    </Animated.View>
  )
}
