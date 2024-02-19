import React, { type ReactNode } from 'react'
import { Pressable, View, Text, type PressableProps } from 'react-native'

import { styles } from './styles'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'
import { useDarkTheme } from '../../../hooks/useDarkTheme'
import { CaretRight } from 'phosphor-react-native'

export interface ItemProps extends PressableProps {
  icon?: ReactNode
  text?: string
  borderBottom?: boolean
}

export function Item({ icon, text, borderBottom, ...props }: ItemProps) {
  const { darkTheme } = useDarkTheme()
  return (
    <Pressable style={styles.container} {...props}>
      {icon}
      <View
        style={[
          styles.innerContainer,
          { borderBottomWidth: borderBottom ? 1 : 0 },
        ]}
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
        <CaretRight size={20} weight='bold' color='#B0B0B0' />
      </View>
    </Pressable>
  )
}
