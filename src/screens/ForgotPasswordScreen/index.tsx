import React, { useState } from 'react'
import { View, Image, Text, Pressable } from 'react-native'

import { useToast } from 'react-native-toast-notifications'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AuthStackParamList } from '../../routes/auth.routes'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyScrollView } from '../../components/MyScrollView'
import { MyTextInput } from '../../components/MyTextInput'
import { MyButton } from '../../components/MyButton'

import { useUser } from '../../hooks/useUser'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import Logo from '../../assets/LogoPainted.png'
import LogoWhite from '../../assets/LogoPaintedWhite.png'

import { CaretLeft } from 'phosphor-react-native'

// import api from '../../services/api'
// import { AxiosResponse } from 'axios'

type ForgotPasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'ForgotPasswordScreen'
>

export function ForgotPasswordScreen({
  navigation,
}: ForgotPasswordScreenProps) {
  const toast = useToast()

  const { user, setUser } = useUser()
  const { darkTheme } = useDarkTheme()

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleEmailInput = () => {
    // const requestBody = {
    //   email
    // }
    // setLoading(true)
    // api
    //   .put('/students/generate-code', requestBody)
    //   .then((response: AxiosResponse) => {
    //     const { randomCode } = response.data
    //     setUser({ ...user, email, code: randomCode })
    //     setLoading(false)
    //     toast.show('Bem vindo de volta - Crie sua nova senha!', { type: 'success' })
    //     setTimeout(() => {
    //       toast.hideAll()
    //       navigation.navigate('VerifyEmailScreen')
    //     }, 1500)
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.erro)
    //   })

    setLoading(true)
    setTimeout(() => {
      setUser({ ...user, email, code: '000000' })
      setLoading(false)
      toast.show('Bem vindo de volta - Crie sua nova senha!', {
        type: 'success',
      })
      setTimeout(() => {
        toast.hideAll()
        navigation.navigate('VerifyEmailScreen')
      }, 1500)
    }, 1500)
  }

  return (
    <>
      <MyStatusBar
        backgroundColor={
          darkTheme ? DARK.COLORS.BACKGROUND : LIGHT.COLORS.BACKGROUND
        }
        barStyle={darkTheme ? 'light-content' : 'dark-content'}
      />
      <MyScrollView isTherekeyboard>
        <View style={styles.container}>
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                navigation.navigate('LoginScreen')
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
            <Image source={darkTheme ? LogoWhite : Logo} style={styles.logo} />
          </View>
          <View style={styles.main}>
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
                Recuperar Senha
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
                Digite seu e-mail da Unicamp
              </Text>
            </View>
            <MyTextInput
              value={email}
              onChangeText={text => {
                setEmail(text)
              }}
              placeholder='E-mail instuticional'
              inputMode='email'
              textContentType='emailAddress'
            />
          </View>
          <View style={styles.buttonContainer}>
            <MyButton
              text='Continuar'
              loading={loading}
              onPress={handleEmailInput}
            />
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
