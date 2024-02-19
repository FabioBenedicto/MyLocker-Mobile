import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AppStackParamList } from '../../routes/app.routes'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyScrollView } from '../../components/MyScrollView'
import { SubmitPaymentProve } from '../../components/Apm/SubmitPaymentProveButton'
import { ApmSituation } from '../../components/Apm/ApmSituation'

import { useUser } from '../../hooks/useUser'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import { CaretLeft } from 'phosphor-react-native'

type ApmScreenProps = NativeStackScreenProps<AppStackParamList, 'ApmScreen'>

export function ApmScreen({ navigation }: ApmScreenProps) {
  const { user } = useUser()
  const { darkTheme } = useDarkTheme()

  const [sendApm, setSendApm] = useState(!(user.apmCount > 0))

  return (
    <>
      <MyStatusBar
        backgroundColor={
          darkTheme
            ? DARK.COLORS.STATUSBAR_BACKGROUND
            : LIGHT.COLORS.STATUSBAR_BACKGROUND
        }
        barStyle='light-content'
      />
      <MyScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                navigation.navigate('ConfigurationScreen')
              }}
              style={styles.back}
            >
              <CaretLeft
                size='30'
                weight='bold'
                color={
                  darkTheme
                    ? DARK.COLORS.BUTTON_BACKGROUND
                    : LIGHT.COLORS.BUTTON_BACKGROUND
                }
              />
            </Pressable>
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.title,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                APM
              </Text>
              <Text
                style={[
                  styles.subtitle,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_SECONDARY
                      : LIGHT.COLORS.TEXT_SECONDARY,
                  },
                ]}
              >
                Submeta e acompanhe a situação de seu pedido de desconto pela
                APM.
              </Text>
            </View>
          </View>
          <View style={styles.main}>
            {sendApm ? (
              <SubmitPaymentProve setSendApm={setSendApm} />
            ) : (
              <ApmSituation
                setSendApm={setSendApm}
                situation={
                  user.apm[0]?.status === 0
                    ? 'Rejeitada'
                    : user.apm[0]?.status === 1
                    ? 'Em Análise'
                    : 'Aprovada'
                }
              />
            )}
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
