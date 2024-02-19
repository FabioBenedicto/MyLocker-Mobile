import React from 'react'
import { ScrollView, View, Text, Image, Pressable } from 'react-native'

import { type SectionsTypes } from '../../../screens/RentLockerScreen'
import { useDarkTheme } from '../../../hooks/useDarkTheme'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'

import { styles } from './styles'

import LockerSectionYellow from '../../../assets/LockerSectionYellow.png'
import LockerSectionRed from '../../../assets/LockerSectionRed.png'
import LockerSectionGreen from '../../../assets/LockerSectionGreen.png'
import LockerSectionBlue from '../../../assets/LockerSectionBlue.png'

export interface ChooseLockersSectionProps {
  navigateToSection: (sectionNumber: SectionsTypes) => void
}

export function ChooseLockersSection({
  navigateToSection,
}: ChooseLockersSectionProps) {
  const { darkTheme } = useDarkTheme()

  return (
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
        <View style={styles.gridContainer}>
          <View style={styles.firstRowContainer}>
            <View style={styles.yellowLockerSectionsContainer}>
              <Pressable
                onPress={() => {
                  navigateToSection(1)
                }}
                style={styles.lockerSectionContainer}
              >
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 10
                </Text>
                <Image
                  source={LockerSectionYellow}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 11
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigateToSection(2)
                }}
                style={styles.lockerSectionContainer}
              >
                <Image
                  source={LockerSectionYellow}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 12
                </Text>
              </Pressable>
            </View>
            <View style={styles.redLockerSectionsContainer}>
              <Pressable
                onPress={() => {
                  navigateToSection(3)
                }}
                style={styles.lockerSectionContainer}
              >
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Saúde
                </Text>
                <Image
                  source={LockerSectionRed}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 13
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigateToSection(4)
                }}
                style={styles.lockerSectionContainer}
              >
                <Image
                  source={LockerSectionRed}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 14
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigateToSection(5)
                }}
                style={styles.lockerSectionContainer}
              >
                <Image
                  source={LockerSectionRed}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 15
                </Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.secondRowContainer}>
            <Pressable
              onPress={() => {
                navigateToSection(6)
              }}
              style={styles.lockerSectionContainer}
            >
              <Text
                style={[
                  styles.lockerSectionText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                Sala 2
              </Text>
              <Image
                source={LockerSectionGreen}
                style={styles.lockerSectionImage}
              />
              <Text
                style={[
                  styles.lockerSectionText,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_PRIMARY
                      : LIGHT.COLORS.TEXT_PRIMARY,
                  },
                ]}
              >
                Sala 3
              </Text>
            </Pressable>

            <View style={styles.blueLockerSectionsContainer}>
              <Pressable
                onPress={() => {
                  navigateToSection(7)
                }}
                style={styles.lockerSectionContainer}
              >
                <Text
                  style={[
                    styles.lockerSectionLongText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Vestiário Masculino
                </Text>
                <Image
                  source={LockerSectionBlue}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 4
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigateToSection(8)
                }}
                style={styles.lockerSectionContainer}
              >
                <Image
                  source={LockerSectionBlue}
                  style={styles.lockerSectionImage}
                />
                <Text
                  style={[
                    styles.lockerSectionText,
                    {
                      color: darkTheme
                        ? DARK.COLORS.TEXT_PRIMARY
                        : LIGHT.COLORS.TEXT_PRIMARY,
                    },
                  ]}
                >
                  Sala 5
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
