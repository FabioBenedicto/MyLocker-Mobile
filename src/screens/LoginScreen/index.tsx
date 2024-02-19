import React, { useState } from 'react'
import { View, Image, Text, Pressable, Platform } from 'react-native'

import { useToast } from 'react-native-toast-notifications'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AuthStackParamList } from '../../routes/auth.routes'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyScrollView } from '../../components/MyScrollView'
import { MyTextInput } from '../../components/MyTextInput'
import { MyTextInputNotEditable } from '../../components/MyTextInputNotEditable'
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
// import { type AxiosResponse } from 'axios'

import { studentTable } from '../../database/studentTable'

type LoginScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'LoginScreen'
>

export function LoginScreen({ navigation }: LoginScreenProps) {
  const toast = useToast()

  const { user, setUser } = useUser()
  const { darkTheme } = useDarkTheme()

  const [loginWithEmailSucceed, setLoginWithEmailSucceed] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    // const requestBody = {
    //   email,
    // }

    setLoading(true)

    // api
    //   .post('/students/verifyPasswordExistence', requestBody)
    //   .then((response: AxiosResponse) => {
    //     const { hasPassword } = response.data

    //     if (hasPassword) {
    //       setLoginWithEmailSucceed(true)
    //       setLoading(false)
    //     } else {
    //       api
    //         .put('/students/generate-code', requestBody)
    //         .then((response: AxiosResponse) => {
    //           const { randomCode } = response.data
    //           console.log(response.data)
    //           setUser({ ...user, email, code: randomCode })
    //           setLoading(false)
    //           toast.show('Bem vindo ao MyLocker - Crie sua senha!', {type: 'success'})
    //           setTimeout(() => {
    //             toast.hideAll()
    //             navigation.navigate('VerifyEmailScreen')
    //           }, 1500)
    //         })
    //         .catch(err => {
    //           toast.show(err.response.data.erro, {type: 'danger'})
    //         })
    //     }
    //   })
    //   .catch(err => {
    //     setLoading(false)
    //     toast.show(err.response.data.erro, {type: 'danger'})
    //   })

    const [student] = studentTable.filter(student => student.email === email)
    setTimeout(() => {
      if (student) {
        if (student.password) {
          setLoginWithEmailSucceed(true)
          setLoading(false)
        } else {
          setUser({ ...user, email, code: '000000' })
          setLoading(false)
          toast.show('Bem vindo ao MyLocker - Crie sua senha!', {
            type: 'success',
          })
          setTimeout(() => {
            toast.hideAll()
            navigation.navigate('VerifyEmailScreen')
          }, 1500)
        }
      } else {
        setLoading(false)
        toast.show('Email inexistente', { type: 'danger' })
      }
    }, 1500)
  }

  const showForgotEmailToast = () => {
    toast.show(
      'Seu email institucional segue o seguinte formato: "clRA@g.unicamp.br"',
      {
        style: {
          backgroundColor: darkTheme ? '#333' : '#fff',
          marginTop: Platform.OS === 'ios' ? 20 : 10,
          elevation: 6,
        },
        textStyle: {
          textAlign: 'center',
          color: darkTheme ? '#fff' : '#000',
        },
      },
    )
  }

  const handlePasswordVerification = () => {
    // const requestBody = {
    //   email,
    //   password,
    // }

    setLoading(true)

    // api
    //   .post('/students/session', requestBody, { withCredentials: true })
    //   .then((response: AxiosResponse) => {
    //     console.log(response.data)
    //     setLoading(false)
    //     toast.show('Login realizado com sucesso', {type: 'success' })
    //     setTimeout(() => {
    //       toast.hideAll()
    //       setUser(response.data)
    //     }, 1500)
    //   })
    //   .catch(err => {
    //     setLoading(false)
    //     toast.show(err.response.data.erro, {type: 'danger'})
    //   })

    const [student] = studentTable.filter(student => student.email === email)
    setTimeout(() => {
      if (student.password === password) {
        setLoading(false)
        toast.show('Login realizado com sucesso', { type: 'success' })
        setTimeout(() => {
          toast.hideAll()
          setUser(student)
          console.log(user)
        }, 1500)
      } else {
        setLoading(false)
        toast.show('Senha incorreta', { type: 'danger' })
      }
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
            {loginWithEmailSucceed ? (
              <Pressable
                onPress={() => {
                  setLoginWithEmailSucceed(false)
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
            ) : null}
            <Image
              source={darkTheme ? LogoWhite : Logo}
              style={[
                styles.logo,
                { marginTop: !loginWithEmailSucceed ? 70 : undefined },
              ]}
            />
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
                Entrar
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
                {loginWithEmailSucceed
                  ? 'Digite sua senha para fazer login'
                  : 'Digite seu e-mail da Unicamp'}
              </Text>
            </View>
            {loginWithEmailSucceed ? (
              <View style={styles.inputGroup}>
                <MyTextInputNotEditable value={email} />

                <MyTextInput
                  secureTextEntry
                  value={password}
                  onChangeText={text => {
                    setPassword(text)
                  }}
                  placeholder='Senha'
                  textContentType='password'
                />
              </View>
            ) : (
              <MyTextInput
                value={email}
                onChangeText={text => {
                  setEmail(text)
                }}
                placeholder='E-mail instuticional'
                inputMode='email'
                textContentType='emailAddress'
                autoCapitalize='none'
              />
            )}

            <Pressable
              style={styles.linkContainer}
              onPress={() => {
                loginWithEmailSucceed
                  ? navigation.navigate('ForgotPasswordScreen')
                  : showForgotEmailToast()
              }}
            >
              <Text style={styles.linkText}>
                {loginWithEmailSucceed
                  ? 'Esqueceu sua senha?'
                  : 'Esqueceu seu email?'}
              </Text>
            </Pressable>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              text='Continuar'
              loading={loading}
              onPress={
                loginWithEmailSucceed ? handlePasswordVerification : handleLogin
              }
            />
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
