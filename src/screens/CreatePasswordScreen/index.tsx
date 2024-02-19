import React, { useState } from 'react'
import { Image, View, Text, Pressable } from 'react-native'

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

// import api from '../../services/api'

import { studentTable } from '../../database/studentTable'
import { CaretLeft } from 'phosphor-react-native'

type CreatePasswordScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'CreatePasswordScreen'
>

export function CreatePasswordScreen({
  navigation,
}: CreatePasswordScreenProps) {
  const toast = useToast()

  const { user } = useUser()
  const { darkTheme } = useDarkTheme()

  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const handleCreatePassword = () => {
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/

    const passwordHasLettersAndNumbers = regex.test(password)

    if (!passwordHasLettersAndNumbers) {
      toast.show(
        'Sua senha deve conter numeros, letras minusculas e letras maiusculas',
        {
          type: 'danger',
        },
      )
      return
    }

    const passwordMatches = password === passwordConfirm

    if (!passwordMatches) {
      toast.show('Senhas não coincidem', { type: 'danger' })
      return
    }

    if (passwordMatches) {
      // const requestBody = {
      //   email: user.email,
      //   password,
      // }

      setLoading(true)

      // api.get('/logout/students', { withCredentials: true }).then(() => {
      //   setUser({
      //     ra: '',
      //     first_name: '',
      //     last_name: '',
      //     email: '',
      //     code: '',
      //     password: '',
      //     locker_number: undefined,
      //     status: undefined,
      //   })

      //   api
      //     .put('/students/update-password', requestBody)
      //     .then(() => {
      //       toast.show('Senha criada com sucesso', { type: 'success' })
      //       setLoading(false)
      //       navigation.navigate('LoginScreen')
      //     })
      //     .catch(err => {
      //       toast.show(err.response.data, { type: 'success' })
      //       setLoading(false)
      //     })
      // })

      setTimeout(() => {
        const index = studentTable.indexOf(
          studentTable.filter(student => student.email === user.email)[0],
        )
        studentTable[index].password = password
        toast.show('Senha criada com sucesso', { type: 'success' })
        setLoading(false)
        navigation.navigate('LoginScreen')
      }, 1500)
    }
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
                navigation.navigate('VerifyEmailScreen')
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
                Criar Senha
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
                Crie uma senha para sua conta
              </Text>
            </View>
            <View style={styles.inputGroup}>
              <MyTextInput
                secureTextEntry
                value={password}
                onChangeText={text => {
                  setPassword(text)
                }}
                placeholder='Senha'
                textContentType='password'
              />
              <MyTextInput
                secureTextEntry
                value={passwordConfirm}
                onChangeText={text => {
                  setPasswordConfirm(text)
                }}
                placeholder='Confirmar Senha'
                textContentType='password'
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <MyButton
              text='Continuar'
              loading={loading}
              onPress={handleCreatePassword}
            />
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
