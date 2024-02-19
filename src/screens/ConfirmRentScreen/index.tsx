import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'

import { useToast } from 'react-native-toast-notifications'

import { type AppStackParamList } from '../../routes/app.routes'
import { type NativeStackScreenProps } from '@react-navigation/native-stack'

import { MyStatusBar } from '../../components/MyStatusBar'
import { MyScrollView } from '../../components/MyScrollView'
import { LockerInformation } from '../../components/LockerInformation'
import { MyButton } from '../../components/MyButton'

import { useUser } from '../../hooks/useUser'
import { useLocker } from '../../hooks/useLocker'
import { useDarkTheme } from '../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../themes/dark'
import { LIGHT } from '../../themes/light'

import LockerImage from '../../assets/LockerImage.png'

import { CaretLeft } from 'phosphor-react-native'

// import api from '../../services/api'
// import { AxiosResponse } from 'axios'

import { lockerTable } from '../../database/lockerTable'

type LoginScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'ConfirmRentScreen'
>

export function ConfirmRentScreen({ navigation }: LoginScreenProps) {
  const toast = useToast()

  const { user, setUser } = useUser()
  const { locker } = useLocker()
  const { darkTheme } = useDarkTheme()

  const [loading, setLoading] = useState(false)

  const regularPrice = 200
  const discount = 100

  const handleLockerRent = () => {
    // const requestBodyStudent = {
    //   ra: user.ra,
    //   lockerNumber,
    // }
    // const requestBodyLocker = {
    //   lockerNumber,
    //   isRented: 1,
    // }

    setLoading(true)

    // api.post('/lockers/set-is-rented', requestBodyLocker).catch(err => {
    //   toast.show(err.response.data.erro, { type: 'danger' })
    // })
    // api
    //   .post('/students/update-locker-number', requestBodyStudent, {
    //     withCredentials: true,
    //   })
    //   .then((response: AxiosResponse) => {
    //     setUser(response.data)
    //     toast.show('Armário alugado com sucesso', { type: 'success' })
    //     setLoading(false)
    //     setTimeout(() => {
    //       toast.hideAll()
    //       navigation.navigate('profileScreen')
    //     }, 1500)
    //   })
    //   .catch(err => {
    //     toast.show(err.response.data.erro, { type: 'danger' })
    //   })

    setTimeout(() => {
      lockerTable[lockerTable.indexOf(locker!)].isRented = true
      lockerTable[lockerTable.indexOf(locker!)].rentedAt =
        new Date().toLocaleDateString() +
        ' - ' +
        new Date().toLocaleTimeString()
      setUser({ ...user, locker_number: locker!.number })
      toast.show('Armário alugado com sucesso', { type: 'success' })
      setLoading(false)
      setTimeout(() => {
        toast.hideAll()
        navigation.navigate('ProfileScreen')
      }, 1500)
    }, 1500)
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
                navigation.navigate('RentLockerScreen')
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
                Revise seu pedido e realize o pagamento
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.lockerContainer,
              {
                backgroundColor: darkTheme
                  ? DARK.COLORS.PANEL_BACKGROUND
                  : LIGHT.COLORS.PANEL_BACKGROUND,
              },
            ]}
          >
            <View style={styles.lockerHeader}>
              <View
                style={[
                  styles.lockerImageContainer,
                  { backgroundColor: locker!.section.color },
                ]}
              >
                <Image source={LockerImage} style={styles.lockerImage} />
              </View>
              <View style={styles.lockerHeaderTextContainer}>
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
                  {`Armário ${locker!.number}`}
                </Text>
                <Text
                  style={[
                    styles.price,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  R$200,00
                </Text>
              </View>
            </View>
            <View style={styles.lockerMain}>
              <LockerInformation
                leftText='Andar:'
                rightText={locker!.FK_section_id <= 5 ? 'Segundo' : 'Primeiro'}
              />
              <LockerInformation
                leftText='Cor:'
                rightText={transformHexToPlainText(locker!.section.color)}
                colorSquare={locker!.section.color}
              />
              <LockerInformation
                leftText='À esquerda:'
                rightText={locker!.section.left_room}
              />
              <LockerInformation
                leftText='À direita:'
                rightText={locker!.section.right_room}
              />
            </View>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceInformationContainer}>
              <Text
                style={[
                  styles.subtotalText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                Subtotal
              </Text>
              <Text
                style={[
                  styles.subtotalText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                R$200,00
              </Text>
            </View>
            <View style={styles.priceInformationContainer}>
              <Text
                style={[
                  styles.discountText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_SECONDARY
                      : LIGHT.COLORS.TEXT_SECONDARY,
                  },
                ]}
              >
                Desconto APM
              </Text>
              {user.apm[0]?.status > 0 ? (
                <Text
                  style={[
                    styles.discountText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY,
                    },
                  ]}
                >
                  ({(discount * 100) / regularPrice}%) - R$
                  {regularPrice - discount},00
                </Text>
              ) : (
                <Text
                  style={[
                    styles.discountText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_SECONDARY
                        : LIGHT.COLORS.TEXT_SECONDARY,
                    },
                  ]}
                >
                  (0%) - R$0,00
                </Text>
              )}
            </View>
            <View style={styles.line} />
            <View style={styles.priceInformationContainer}>
              <Text
                style={[
                  styles.totalText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                Total
              </Text>
              <Text
                style={[
                  styles.totalText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                R$
                {user.apm[0]?.status > 0
                  ? regularPrice - discount
                  : regularPrice}
                ,00
              </Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <MyButton
              text='Finalizar Compra'
              loading={loading}
              onPress={handleLockerRent}
            />
          </View>
        </View>
      </MyScrollView>
    </>
  )
}
