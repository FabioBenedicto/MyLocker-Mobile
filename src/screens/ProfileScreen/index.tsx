import React, { useEffect, useState } from 'react'
import { View, Image, Text, Pressable } from 'react-native'

import { useToast } from 'react-native-toast-notifications'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AppStackParamList } from '../../routes/app.routes'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyModal } from '../../components/MyModal'
import { LockerInformation } from '../../components/LockerInformation'
import { MyScrollView } from '../../components/MyScrollView'
import { Loading } from '../../components/Loading'
import { MyButton } from '../../components/MyButton'

import { type Locker } from '../../contexts/LockerContext'

import { useUser } from '../../hooks/useUser'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import DefaultProfilePic from '../../assets/DefaultProfilePicture.jpg'
import DefaultProfilePicDarkMode from '../../assets/DefaultProfilePictureDarkMode.jpg'
import LockerImage from '../../assets/LockerImage.png'
import NoLockersFounded from '../../assets/NoLockersFounded.png'

import { Gear } from 'phosphor-react-native'

// import api from '../../services/api';
// import { AxiosResponse } from 'axios'

import { lockerTable } from '../../database/lockerTable'

type ProfileScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ProfileScreen'
>

export function ProfileScreen({ navigation }: ProfileScreenProps) {
  const toast = useToast()

  const { user } = useUser()
  const { darkTheme } = useDarkTheme()

  const [studentLocker, setStudentLocker] = useState<Locker | null>(null)
  const [loadingLocker, setLoadingLocker] = useState(true)
  const [lockerModalIsOpen, setLockerModalIsOpen] = useState(false)

  const userCompleteName = user.first_name + ' ' + user.last_name

  const handleLockerModalChangeState = () => {
    if (lockerModalIsOpen) {
      setLockerModalIsOpen(false)
    } else {
      setLockerModalIsOpen(true)
    }
  }

  const loadLocker = async () => {
    // if (user.locker_number) {
    //   api
    //     .get(`/lockers/${user.locker_number}`)
    //     .then((response: AxiosResponse) => {
    //       setStudentLocker(response.data);
    //       setLoadingLocker(false);
    //     })
    //     .catch(err => {
    //       toast.show(err.response.data.erro, {type: 'danger'});
    //       setLoadingLocker(false);
    //     });
    // } else {
    //   setLoadingLocker(false);
    // }

    if (user.locker_number) {
      const [locker] = lockerTable.filter(
        locker => locker.number === user.locker_number,
      )
      if (locker) {
        setStudentLocker(locker)
        setLoadingLocker(false)
      } else {
        toast.show('Não possui armários', { type: 'danger' })
        setLoadingLocker(false)
      }
    } else {
      setLoadingLocker(false)
    }
  }

  const transformHexToPlainText = (hex: string) => {
    if (hex === '#FDFF97') {
      return 'Amarelo'
    }
    if (hex === '#FF7B7B') {
      return 'Vermelho'
    }
    if (hex === '#92B7FF') {
      return 'Azul'
    }
    if (hex === '#A6FFEA') {
      return 'Verde Água'
    }
    return ''
  }

  useEffect(() => {
    loadLocker()
  }, [user])

  return (
    <>
      <MyModal
        open={lockerModalIsOpen}
        closeModal={handleLockerModalChangeState}
      >
        {studentLocker ? (
          <View
            style={[
              styles.lockerModalContainer,
              {
                backgroundColor: darkTheme
                  ? DARK.COLORS.PANEL_BACKGROUND
                  : LIGHT.COLORS.PANEL_BACKGROUND,
              },
            ]}
          >
            <View style={styles.lockerModalHeader}>
              <View
                style={[
                  styles.lockerImageContainer,
                  { backgroundColor: studentLocker?.section.color },
                ]}
              >
                <Image source={LockerImage} style={styles.lockerImage} />
              </View>
              <View>
                <Text
                  style={[
                    styles.lockerModalHeaderTitle,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Armário {studentLocker?.number}
                </Text>
                <Text
                  style={[
                    styles.lockerModalHeaderSubtitle,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY,
                    },
                  ]}
                >
                  Alugado em {studentLocker.rentedAt?.split(' ')[0]}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.line,
                {
                  borderColor: darkTheme
                    ? DARK.COLORS.TEXT_PRIMARY
                    : LIGHT.COLORS.TEXT_PRIMARY,
                },
              ]}
            />
            <View style={styles.lockersInformationContainer}>
              <LockerInformation
                leftText='Andar:'
                rightText={
                  studentLocker.FK_section_id <= 5 ? 'Segundo' : 'Primeiro'
                }
              />
              <LockerInformation
                leftText='Cor:'
                rightText={transformHexToPlainText(studentLocker.section.color)}
                colorSquare={studentLocker?.section.color}
              />
              <LockerInformation
                leftText='À esquerda:'
                rightText={studentLocker.section.left_room}
              />
              <LockerInformation
                leftText='À direita:'
                rightText={studentLocker.section.right_room}
              />
            </View>
          </View>
        ) : null}
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
          <View style={styles.innerContainer}>
            <View style={styles.header}>
              <View
                style={[
                  styles.background,
                  {
                    backgroundColor: studentLocker
                      ? studentLocker.section.color
                      : '#D1D1D1',
                  },
                ]}
              >
                <Pressable
                  onPress={() => {
                    navigation.navigate('ConfigurationScreen')
                  }}
                  style={styles.icon}
                >
                  <Gear
                    size={20}
                    weight='fill'
                    color={
                      darkTheme
                        ? DARK.COLORS.STATUSBAR_BACKGROUND
                        : LIGHT.COLORS.STATUSBAR_BACKGROUND
                    }
                  />
                </Pressable>
              </View>

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
                    numberOfLines={1}
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
                    numberOfLines={1}
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

            <View style={styles.main}>
              <View style={styles.titleContainer}>
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
                  Meu Armário
                </Text>

                <View
                  style={[
                    styles.line,
                    {
                      borderColor: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                />
              </View>

              {user.locker_number == null && !loadingLocker ? (
                <View style={styles.noLockerContainer}>
                  <Image
                    source={NoLockersFounded}
                    style={styles.noLockerImage}
                  />
                  <Text style={styles.noLockerText}>
                    Nenhum armário alugado
                  </Text>
                </View>
              ) : (
                <>
                  {!studentLocker ? (
                    <Loading
                      color={
                        darkTheme
                          ? DARK.COLORS.TEXT_PRIMARY
                          : LIGHT.COLORS.TEXT_PRIMARY
                      }
                    />
                  ) : (
                    <Pressable
                      style={[
                        styles.lockerContainer,
                        {
                          backgroundColor: darkTheme
                            ? DARK.COLORS.PANEL_BACKGROUND
                            : LIGHT.COLORS.PANEL_BACKGROUND,
                        },
                      ]}
                      onPress={handleLockerModalChangeState}
                    >
                      <View
                        style={[
                          styles.lockerImageContainer,
                          { backgroundColor: studentLocker.section.color },
                        ]}
                      >
                        <Image
                          source={LockerImage}
                          style={styles.lockerImage}
                        />
                      </View>
                      <View style={styles.lockerTextContainer}>
                        <Text
                          style={[
                            styles.number,
                            {
                              color: darkTheme
                                ? DARK.COLORS.TEXT_PRIMARY
                                : LIGHT.COLORS.TEXT_PRIMARY,
                            },
                          ]}
                        >
                          Armário {studentLocker.number}
                        </Text>
                        <Text
                          style={[
                            styles.rentedAt,
                            {
                              color: darkTheme
                                ? DARK.COLORS.TEXT_SECONDARY
                                : LIGHT.COLORS.TEXT_SECONDARY,
                            },
                          ]}
                        >
                          Alugado em {studentLocker.rentedAt?.split(' ')[0]}
                        </Text>
                      </View>
                    </Pressable>
                  )}
                </>
              )}
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              text={studentLocker ? 'Vizualizar Armários' : 'Alugar um Armário'}
              onPress={() => {
                navigation.navigate('RentLockerScreen')
              }}
            />
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
