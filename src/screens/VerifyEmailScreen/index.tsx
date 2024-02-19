import React, { useRef, useState } from 'react'
import {
  View,
  Image,
  Text,
  Pressable,
  Keyboard,
  type TextInput,
  type NativeSyntheticEvent,
  type TextInputKeyPressEventData,
  Platform,
} from 'react-native'

import { useToast } from 'react-native-toast-notifications'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AuthStackParamList } from '../../routes/auth.routes'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyScrollView } from '../../components/MyScrollView'
import { MyCharInput } from '../../components/MyCharInput'
import { MyButton } from '../../components/MyButton'

import { useUser } from '../../hooks/useUser'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { LIGHT } from '../../themes/light'
import { DARK } from '../../themes/dark'

import Logo from '../../assets/LogoPainted.png'
import LogoWhite from '../../assets/LogoPaintedWhite.png'

import { CaretLeft } from 'phosphor-react-native'

// import api from '../../services/api'
// import { type AxiosResponse } from 'axios'

const ALLOWED_CHARACTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  'r',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
]

type VerifyEmailScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'VerifyEmailScreen'
>

export function VerifyEmailScreen({ navigation }: VerifyEmailScreenProps) {
  const toast = useToast()

  const { user /* setUser */ } = useUser()
  const { darkTheme } = useDarkTheme()

  const [input1Value, setInput1Value] = useState('')
  const [input2Value, setInput2Value] = useState('')
  const [input3Value, setInput3Value] = useState('')
  const [input4Value, setInput4Value] = useState('')
  const [input5Value, setInput5Value] = useState('')
  const [input6Value, setInput6Value] = useState('')

  const inputs = [
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
    useRef<TextInput>(null),
  ]

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    value: number,
  ) => {
    if (ALLOWED_CHARACTERS.includes(e.nativeEvent.key.toLowerCase())) {
      if (value === 5) {
        Keyboard.dismiss()
      } else {
        value++
        inputs[value].current?.focus()
      }
    } else if (e.nativeEvent.key === 'Backspace') {
      if (value === 0) {
        Keyboard.dismiss()
      } else {
        value--
        inputs[value].current?.focus()
      }
    }
  }

  const handleCodeSubmit = () => {
    const codeType =
      input1Value +
      input2Value +
      input3Value +
      input4Value +
      input5Value +
      input6Value

    if (codeType === user.code) {
      toast.show('Verificação realizada com sucesso', { type: 'success' })
      setTimeout(() => {
        toast.hideAll()
        navigation.navigate('CreatePasswordScreen')
        inputs.forEach(input => {
          input.current?.clear()
        })
      }, 1500)
    } else {
      toast.show('Código Incorreto', { type: 'danger' })
    }
  }

  const handleCodeResubmit = () => {
    // const requestBody = {
    //   email: user.email,
    // }

    toast.show('Reenviando código...', {
      style: {
        backgroundColor: darkTheme ? '#333' : '#fff',
        marginTop: Platform.OS === 'ios' ? 20 : 10,
        elevation: 6,
      },
    })

    // api
    //   .put('/students/generate-code', requestBody)
    //   .then((response: AxiosResponse) => {
    //     const { randomCode } = response.data
    //     setUser({ ...user, code: randomCode })
    //     toast.hideAll()
    //     toast.show('Código reenviado!', { type: 'success' })
    //   })
    //   .catch(err => {
    //     toast.hideAll()
    //     toast.show(err.response.data.erro, { type: 'danger' })
    //   })

    setTimeout(() => {
      toast.hideAll()
      toast.show('Código reenviado', { type: 'success' })
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
                Verifique seu e-mail
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
                Digite o código enviado para o seu e-mail
              </Text>
            </View>
            <View style={styles.main}>
              <View style={styles.inputGroup}>
                <MyCharInput
                  ref={inputs[0]}
                  value={input1Value}
                  onChangeText={text => {
                    setInput1Value(text)
                  }}
                  onKeyPress={e => {
                    handleKeyPress(e, 0)
                  }}
                />
                <MyCharInput
                  ref={inputs[1]}
                  value={input2Value}
                  onChangeText={text => {
                    setInput2Value(text)
                  }}
                  onKeyPress={e => {
                    handleKeyPress(e, 1)
                  }}
                />
                <MyCharInput
                  ref={inputs[2]}
                  value={input3Value}
                  onChangeText={text => {
                    setInput3Value(text)
                  }}
                  onKeyPress={e => {
                    handleKeyPress(e, 2)
                  }}
                />
                <MyCharInput
                  ref={inputs[3]}
                  value={input4Value}
                  onChangeText={text => {
                    setInput4Value(text)
                  }}
                  onKeyPress={e => {
                    handleKeyPress(e, 3)
                  }}
                />
                <MyCharInput
                  ref={inputs[4]}
                  value={input5Value}
                  onChangeText={text => {
                    setInput5Value(text)
                  }}
                  onKeyPress={e => {
                    handleKeyPress(e, 4)
                  }}
                />
                <MyCharInput
                  ref={inputs[5]}
                  value={input6Value}
                  onChangeText={text => {
                    setInput6Value(text)
                  }}
                  onKeyPress={e => {
                    handleKeyPress(e, 5)
                  }}
                />
              </View>
              <Pressable
                onPress={handleCodeResubmit}
                style={styles.linkContainer}
              >
                <Text style={styles.linkText}>Reenviar código</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <MyButton text='Continuar' onPress={handleCodeSubmit} />
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
