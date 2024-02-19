import React, { useState } from 'react'
import { View, Image, Text, Pressable, Switch } from 'react-native'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AppStackParamList } from '../../routes/app.routes'

import * as ImagePicker from 'expo-image-picker'

import { useToast } from 'react-native-toast-notifications'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyModal } from '../../components/MyModal'
import { ChangeProfilePictureModalButton } from '../../components/Configuration/ChangeProfilePictureModalButton'
import { MyTextInput } from '../../components/MyTextInput'
import { MyScrollView } from '../../components/MyScrollView'
import { Item } from '../../components/Configuration/Item'
import { MyButton } from '../../components/MyButton'

import { useUser } from '../../hooks/useUser'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import DefaultProfilePic from '../../assets/DefaultProfilePicture.jpg'
import DefaultProfilePicDarkMode from '../../assets/DefaultProfilePictureDarkMode.jpg'

import {
  UserCircle,
  FilePlus,
  Lock,
  Moon,
  CaretLeft,
  SignOut,
} from 'phosphor-react-native'

// import api from '../../services/api'

import { studentTable } from '../../database/studentTable'

type ConfigurationScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ConfigurationScreen'
>

export function ConfigurationScreen({ navigation }: ConfigurationScreenProps) {
  const toast = useToast()

  const { user, setUser } = useUser()
  const { darkTheme, setDarkTheme } = useDarkTheme()

  const [changeProfilePictureModalIsOpen, setChangeProfilePictureModalIsOpen] =
    useState(false)
  const [selectedImage, setSelectedImage] = useState<File>()
  const [newProfilePicture, setNewProfilePicture] = useState('')

  const [changePasswordModalIsOpen, setChangePasswordModalIsOpen] =
    useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const userCompleteName = user.first_name + ' ' + user.last_name

  const handleChangeProfilePictureModalChangeState = () => {
    if (changeProfilePictureModalIsOpen) {
      setNewProfilePicture('')
      setChangeProfilePictureModalIsOpen(false)
    } else {
      setChangeProfilePictureModalIsOpen(true)
    }
  }

  const handleChangePasswordModalChangeState = () => {
    if (changePasswordModalIsOpen) {
      setOldPassword('')
      setNewPassword('')
      setNewPasswordConfirm('')
      setChangePasswordModalIsOpen(false)
    } else {
      setChangePasswordModalIsOpen(true)
    }
  }

  const handleSelectImage = async () => {
    const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync()

    if (!granted) {
      const { granted } =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (!granted) {
        return
      }
    }

    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [100, 100],
    })

    if (canceled) {
      toast.show('Operação cancelada', { type: 'danger' })
      return
    }

    const uri = assets[0].uri
    const name = uri.substring(uri.lastIndexOf('/') + 1, uri.length)
    const type = 'image/' + name.split('.')[1]

    const selectedImage = {
      uri,
      name,
      type,
    }

    setSelectedImage(JSON.parse(JSON.stringify(selectedImage)))
    setNewProfilePicture(selectedImage.uri)
  }

  const handleUploadImage = async () => {
    if (selectedImage) {
      // const formData = new FormData()
      // formData.append('profile', selectedImage)
      // formData.append('ra', user.ra)
      // setLoading(true)
      // api
      //   .post('/uploadImage', formData, { withCredentials: true })
      //   .then(res => {
      //     setUser(res.data)
      //     setLoading(false)
      //     handleClosePasswordModal()
      //   })
      //   .catch(err => {
      //     setLoading(false)
      //     toast.show(err.response.data.erro, { type: 'danger' })
      //   })

      const index = studentTable.indexOf(
        studentTable.filter(student => student.email === user.email)[0],
      )
      studentTable[index].profile_picture_url = newProfilePicture
      setUser({ ...user, profile_picture_url: newProfilePicture })
      handleChangeProfilePictureModalChangeState()
    }
  }

  const handleChangePassword = () => {
    const oldPasswordMatches = oldPassword === user.password

    if (!oldPasswordMatches) {
      toast.show('Senha antiga não coincide', { type: 'danger' })
      return
    }

    const newPasswordsMatches = newPassword === newPasswordConfirm

    if (!newPasswordsMatches) {
      toast.show('Senhas não coincidem', { type: 'danger' })
      return
    }

    // const requestBody = {
    //   email: user.email,
    //   password: newPassword,
    //   oldPassword,
    // }

    setLoading(true)

    // api
    //   .put('/students/update-password', requestBody)
    //   .then(() => {
    //     toast.show('Senha alterada com sucesso', {
    //       type: 'sucess',
    //       animationDuration: 100,
    //       animationType: 'zoom-in',
    //       style: { marginTop: Platform.OS === 'ios' ? 20 : 34 },
    //     })
    //     setLoading(false)
    //     setPasswordModalIsOpen(false)
    //   })
    //   .catch(err => {
    //     setLoading(false)
    //     toast.show(err.response.data.erro, {
    //       type: 'danger',
    //       animationDuration: 100,
    //       animationType: 'zoom-in',
    //       style: { marginTop: Platform.OS === 'ios' ? 20 : 34 },
    //     })
    //   })

    setTimeout(() => {
      const index = studentTable.indexOf(
        studentTable.filter(student => student.email === user.email)[0],
      )
      studentTable[index].password = newPassword
      toast.show('Senha alterada com sucesso', { type: 'success' })
      setLoading(false)
      handleChangePasswordModalChangeState()
    }, 1500)
  }

  const handleLogout = () => {
    // api.get('/logout/students', { withCredentials: true }).then(() => {
    setUser({
      ra: '',
      first_name: '',
      last_name: '',
      email: '',
      apm: [],
      apmCount: 0,
    })
    // })
  }

  return (
    <>
      <MyModal
        open={changeProfilePictureModalIsOpen}
        closeModal={handleChangeProfilePictureModalChangeState}
      >
        <View
          style={[
            styles.changeProfilePictureModalContainer,
            {
              backgroundColor: darkTheme
                ? DARK.COLORS.MODAL_BACKGROUND
                : LIGHT.COLORS.MODAL_BACKGROUND,
            },
          ]}
        >
          <Image
            source={
              newProfilePicture
                ? { uri: newProfilePicture }
                : user.profile_picture_url
                ? { uri: user.profile_picture_url }
                : darkTheme
                ? DefaultProfilePicDarkMode
                : DefaultProfilePic
            }
            style={styles.profilePicture}
          />
          <View style={styles.changeProfilePictureModalButtonContainer}>
            <ChangeProfilePictureModalButton
              onPress={handleSelectImage}
              text='Selecionar Outra Foto'
            />

            <ChangeProfilePictureModalButton
              onPress={handleUploadImage}
              text='Confirmar Escolha'
            />
          </View>
        </View>
      </MyModal>

      <MyModal
        open={changePasswordModalIsOpen}
        closeModal={handleChangePasswordModalChangeState}
      >
        <View
          style={[
            styles.changePasswordModalContainer,
            {
              backgroundColor: darkTheme
                ? DARK.COLORS.MODAL_BACKGROUND
                : LIGHT.COLORS.MODAL_BACKGROUND,
            },
          ]}
        >
          <Text
            style={[
              styles.changePasswordModalTitle,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY,
              },
            ]}
          >
            Alterar Senha
          </Text>
          <View style={styles.changePasswordModalInputContainer}>
            <MyTextInput
              secureTextEntry
              value={oldPassword}
              onChangeText={text => {
                setOldPassword(text)
              }}
              placeholder='Senha'
              textContentType='password'
            />

            <Pressable style={styles.linkContainer}>
              <Text style={styles.linkText}>Esqueceu sua senha?</Text>
            </Pressable>

            <MyTextInput
              secureTextEntry
              value={newPassword}
              onChangeText={text => {
                setNewPassword(text)
              }}
              placeholder='Nova Senha'
              textContentType='password'
            />

            <MyTextInput
              secureTextEntry
              value={newPasswordConfirm}
              onChangeText={text => {
                setNewPasswordConfirm(text)
              }}
              placeholder='Nova Senha'
              textContentType='password'
            />
          </View>
          <MyButton
            text='Continuar'
            loading={loading}
            onPress={handleChangePassword}
          />
        </View>
      </MyModal>

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
                navigation.navigate('ProfileScreen')
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

            <View style={styles.profileContainer}>
              <Image
                source={
                  user.profile_picture_url
                    ? { uri: user.profile_picture_url }
                    : darkTheme
                    ? DefaultProfilePicDarkMode
                    : DefaultProfilePic
                }
                style={styles.profilePicture}
              />
              <View style={styles.profileTextContainer}>
                <Text
                  style={[
                    styles.name,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  {userCompleteName}
                </Text>
                <Text
                  style={[
                    styles.email,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY,
                    },
                  ]}
                >
                  {user.email}
                </Text>
              </View>
            </View>
          </View>

          <View
            style={[
              styles.section,
              {
                backgroundColor: darkTheme
                  ? DARK.COLORS.PANEL_BACKGROUND
                  : LIGHT.COLORS.PANEL_BACKGROUND,
              },
            ]}
          >
            <Item
              onPress={() => {
                setChangeProfilePictureModalIsOpen(true)
              }}
              icon={
                <UserCircle
                  size={30}
                  color={
                    darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY
                  }
                />
              }
              text='Alterar foto do perfil'
              borderBottom={true}
            />

            <Item
              onPress={() => {
                setChangePasswordModalIsOpen(true)
              }}
              icon={
                <Lock
                  size={30}
                  color={
                    darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY
                  }
                />
              }
              text='Alterar Senha'
              borderBottom={true}
            />
            <Item
              onPress={() => {
                navigation.navigate('ApmScreen')
              }}
              icon={
                <FilePlus
                  size={30}
                  color={
                    darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY
                  }
                />
              }
              text='Anexar APM'
            />
          </View>

          <View
            style={[
              styles.darkThemeContainer,
              {
                backgroundColor: darkTheme
                  ? DARK.COLORS.PANEL_BACKGROUND
                  : LIGHT.COLORS.PANEL_BACKGROUND,
              },
            ]}
          >
            <Moon
              size={30}
              weight='fill'
              color={
                darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
              }
            />
            <View style={styles.darkThemeInnerContainer}>
              <Text
                style={[
                  styles.darkThemeText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                Tema Escuro
              </Text>
              <Switch
                onValueChange={value => {
                  setDarkTheme(value)
                }}
                value={darkTheme}
                style={styles.switch}
              />
            </View>
          </View>

          <Pressable
            style={[
              styles.signOutContainer,
              {
                backgroundColor: darkTheme
                  ? DARK.COLORS.PANEL_BACKGROUND
                  : LIGHT.COLORS.PANEL_BACKGROUND,
              },
            ]}
            onPress={handleLogout}
          >
            <Text style={styles.signOutText}>Sair</Text>
            <SignOut size={20} weight='regular' color='#FF0000' />
          </Pressable>
        </View>
      </MyScrollView>
    </>
  )
}
