import React, { useState, useEffect } from 'react'
import { ScrollView, View, Pressable, Image, Text } from 'react-native'

import { Loading } from '../../Loading'

import { type Locker } from '../../../contexts/LockerContext'
import { useDarkTheme } from '../../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'

import LockerImage from '../../../assets/LockerImage.png'

export interface ChooseLockerProps {
  lockers: Locker[]
  selectLocker: (locker: Locker) => void
  actualSection: number
}

export function ChooseLocker({
  lockers,
  selectLocker,
  actualSection,
}: ChooseLockerProps) {
  const { darkTheme } = useDarkTheme()

  const [selectedLockers, setSelectedLockers] = useState<Locker[][][] | null>(
    null,
  )
  const [lockerBackgroundColor, setLockerBackgroundColor] = useState<string>('')

  const splitArrayInPieces = (lockers: Locker[], lenght: number) => {
    const firstHalfLockers = []
    const secondHalfLockers = []
    let i = 0
    while (i < lockers.length) {
      if (i < lockers.length / 2) {
        firstHalfLockers.push(lockers.slice(i, i + lenght))
      } else {
        secondHalfLockers.push(lockers.slice(i, i + lenght))
      }
      i += lenght
    }
    return [firstHalfLockers, secondHalfLockers]
  }

  useEffect(() => {
    if (lockers != null) {
      setSelectedLockers(
        splitArrayInPieces(
          lockers.reduce((selectedLockers: Locker[], locker) => {
            if (locker.FK_section_id === actualSection) {
              selectedLockers.push(locker)
            }
            return selectedLockers
          }, []),
          4,
        ),
      )
    }
  }, [lockers, actualSection])

  useEffect(() => {
    if (selectedLockers) {
      setLockerBackgroundColor(selectedLockers[0][0][0].section.color)
    }
  }, [selectedLockers])

  return (
    <>
      {selectedLockers ? (
        <ScrollView
          horizontal
          style={styles.scrollContainer}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.insideScrollContainer}
        >
          <View
            style={[
              styles.container,
              {
                backgroundColor: darkTheme
                  ? DARK.COLORS.PANEL_BACKGROUND
                  : LIGHT.COLORS.PANEL_BACKGROUND,
              },
            ]}
          >
            <View style={styles.sectionContainer}>
              <Text
                style={[
                  styles.leftRoomText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                {selectedLockers[0][0][0].section.left_room}
              </Text>
              <View style={styles.gridContainer}>
                {selectedLockers.map((lockersParsed, selectedLockersIndex) => {
                  return (
                    <View
                      style={styles.rowContainer}
                      key={selectedLockersIndex}
                    >
                      {lockersParsed.map((lockersBlock, lockersBlockIndex) => {
                        return (
                          <View
                            style={styles.innerGridContainer}
                            key={lockersBlockIndex}
                          >
                            <View style={styles.innerRowContainer}>
                              <Pressable
                                onPress={() => {
                                  selectLocker(lockersBlock[0])
                                }}
                                key={lockersBlock[0].number}
                                style={[
                                  styles.lockerImageContainer,
                                  {
                                    backgroundColor: lockerBackgroundColor,
                                  },
                                ]}
                              >
                                <Image
                                  source={LockerImage}
                                  style={styles.lockerImage}
                                />
                                {lockersBlock[0].isRented ? (
                                  <View style={styles.rentedFilter} />
                                ) : null}
                              </Pressable>
                              <Pressable
                                onPress={() => {
                                  selectLocker(lockersBlock[1])
                                }}
                                key={lockersBlock[1].number}
                                style={[
                                  styles.lockerImageContainer,
                                  { backgroundColor: lockerBackgroundColor },
                                ]}
                              >
                                <Image
                                  source={LockerImage}
                                  style={styles.lockerImage}
                                />
                                {lockersBlock[1].isRented ? (
                                  <View style={styles.rentedFilter} />
                                ) : null}
                              </Pressable>
                            </View>
                            <View style={styles.innerRowContainer}>
                              <Pressable
                                onPress={() => {
                                  selectLocker(lockersBlock[2])
                                }}
                                key={lockersBlock[2].number}
                                style={[
                                  styles.lockerImageContainer,
                                  { backgroundColor: lockerBackgroundColor },
                                ]}
                              >
                                <Image
                                  source={LockerImage}
                                  style={styles.lockerImage}
                                />
                                {lockersBlock[2].isRented ? (
                                  <View style={styles.rentedFilter} />
                                ) : null}
                              </Pressable>
                              <Pressable
                                onPress={() => {
                                  selectLocker(lockersBlock[3])
                                }}
                                key={lockersBlock[3].number}
                                style={[
                                  styles.lockerImageContainer,
                                  { backgroundColor: lockerBackgroundColor },
                                ]}
                              >
                                <Image
                                  source={LockerImage}
                                  style={styles.lockerImage}
                                />
                                {lockersBlock[3].isRented ? (
                                  <View style={styles.rentedFilter} />
                                ) : null}
                              </Pressable>
                            </View>
                          </View>
                        )
                      })}
                    </View>
                  )
                })}
              </View>
              <Text
                style={[
                  styles.rightRoomText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                {selectedLockers[0][0][0].section.right_room}
              </Text>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View
          style={[
            styles.container,
            {
              backgroundColor: darkTheme
                ? DARK.COLORS.PANEL_BACKGROUND
                : LIGHT.COLORS.PANEL_BACKGROUND,
            },
          ]}
        >
          <Loading
            color={
              darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
            }
          />
        </View>
      )}
    </>
  )
}
