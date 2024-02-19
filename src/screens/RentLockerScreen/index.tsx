import React, { useEffect, useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'

// import { useToast } from 'react-native-toast-notifications'

import { type NativeStackScreenProps } from '@react-navigation/native-stack'
import { type AppStackParamList } from '../../routes/app.routes'

import { MyModal } from '../../components/MyModal'
import { LockerInformation } from '../../components/LockerInformation'
import { MyStatusBar } from '../../components/MyStatusBar'
import { MyScrollView } from '../../components/MyScrollView'
import { ChooseLocker } from '../../components/RentLocker/ChooseLocker'
import { SectionsMap } from '../../components/RentLocker/SectionMaps'
import { ChooseLockersSection } from '../../components/RentLocker/ChooseLockersSection'
import { MyButton } from '../../components/MyButton'

import { type Locker } from '../../contexts/LockerContext'

import { useUser } from '../../hooks/useUser'
import { useLocker } from '../../hooks/useLocker'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import LockerImage from '../../assets/LockerImage.png'

import { CaretLeft } from 'phosphor-react-native'

// import api from '../../services/api'
// import { type AxiosResponse } from 'axios'

import { lockerTable } from '../../database/lockerTable'

type RentLockerScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'RentLockerScreen'
>

export type SectionsTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export function RentLockerScreen({ navigation }: RentLockerScreenProps) {
  // const toast = useToast()

  const { user } = useUser()
  const { setLocker } = useLocker()
  const { darkTheme } = useDarkTheme()

  const [sectionChoosed, setSectionChoosed] = useState<SectionsTypes | null>(
    null,
  )
  const [lockers, setLockers] = useState<Locker[]>()
  const [lockerModalIsOpen, setLockerModalIsOpen] = useState(false)
  const [selectedLocker, setSelectedLocker] = useState<Locker | null>(null)

  const loadSections = async () => {
    // api
    //   .get('/lockers')
    //   .then((response: AxiosResponse) => {
    //     setLockers(response.data)
    //   })
    //   .catch(err => {
    //     toast.show(err.response.data.erro)
    //   })
    setLockers(lockerTable)
  }

  const handleLockerModalChangeState = () => {
    if (lockerModalIsOpen) {
      setSelectedLocker(null)
      setLockerModalIsOpen(false)
    } else {
      setLockerModalIsOpen(true)
    }
  }

  const selectLocker = (locker: Locker) => {
    handleLockerModalChangeState()
    setSelectedLocker(locker)
    setLocker(locker)
  }

  const transformHexToPlainText = (hex: string) => {
    if (hex === '#FDFF97') {
      return 'Amarelo'
    } else if (hex === '#FF7B7B') {
      return 'Vermelho'
    } else if (hex === '#92B7FF') {
      return 'Azul'
    } else if (hex === '#A6FFEA') {
      return 'Verde Água'
    }
  }

  useEffect(() => {
    loadSections()
  }, [])

  return (
    <>
      <MyModal
        open={lockerModalIsOpen}
        closeModal={handleLockerModalChangeState}
      >
        {selectedLocker ? (
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
                  { backgroundColor: selectedLocker.section.color },
                ]}
              >
                <Image source={LockerImage} style={styles.lockerImage} />
              </View>
              <View style={styles.lockerModalHeaderTextContainer}>
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
                  Armário {selectedLocker.number}
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
                  {selectedLocker.rentedAt
                    ? `Alugado em ${selectedLocker?.rentedAt.split(' ')[0]}`
                    : 'Ainda não foi alugado'}
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
            <View style={[styles.lockerModalMain]}>
              <LockerInformation
                leftText='Andar:'
                rightText={
                  selectedLocker.FK_section_id <= 5 ? 'Segundo' : 'Primeiro'
                }
              />
              <LockerInformation
                leftText='Cor:'
                rightText={transformHexToPlainText(
                  selectedLocker.section.color,
                )}
                colorSquare={selectedLocker?.section.color}
              />
              <LockerInformation
                leftText='À esquerda:'
                rightText={selectedLocker.section.left_room}
              />
              <LockerInformation
                leftText='À direita:'
                rightText={selectedLocker.section.right_room}
              />
              <LockerInformation
                leftText='Situação:'
                rightText={
                  selectedLocker.isRented ? 'Indisponível' : 'Disponível'
                }
                colorSquare={selectedLocker.isRented ? '#FF7B7B' : '#4ECB71'}
              />
            </View>
            <MyButton
              text={
                user.locker_number
                  ? selectedLocker.number === user.locker_number
                    ? 'Este é o seu armário :)'
                    : 'Você já possui um armário'
                  : !selectedLocker.isRented
                  ? 'Quero Alugar!'
                  : 'Armário indisponível'
              }
              disabled={!!(user.locker_number || selectedLocker.isRented)}
              onPress={() => {
                handleLockerModalChangeState()
                navigation.navigate('ConfirmRentScreen')
              }}
            />
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
        <View
          style={[
            styles.container,
            { justifyContent: !sectionChoosed ? undefined : 'space-between' },
          ]}
        >
          <View style={styles.header}>
            <Pressable
              onPress={() => {
                sectionChoosed
                  ? setSectionChoosed(null)
                  : navigation.navigate('ProfileScreen')
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
                Alugue um Armário
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
                {sectionChoosed
                  ? 'Selecione o armário que você deseja alugar.'
                  : 'Selecione o bloco de armários que você deseja.'}
              </Text>
            </View>
          </View>
          {!sectionChoosed ? (
            <ChooseLockersSection navigateToSection={setSectionChoosed} />
          ) : (
            <>
              <ChooseLocker
                actualSection={sectionChoosed}
                lockers={lockers!}
                selectLocker={selectLocker}
              />

              <SectionsMap
                actualSection={sectionChoosed}
                navigateToSection={setSectionChoosed}
              />
            </>
          )}
        </View>
      </MyScrollView>
    </>
  )
}
