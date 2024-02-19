import React from 'react'
import { View, Pressable, Image } from 'react-native'

import { type SectionsTypes } from '../../../screens/RentLockerScreen'
import { useDarkTheme } from '../../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'

import LockerSectionBlue from '../../../assets/LockerSectionBlue.png'
import LockerSectionGreen from '../../../assets/LockerSectionGreen.png'
import LockerSectionRed from '../../../assets/LockerSectionRed.png'
import LockerSectionYellow from '../../../assets/LockerSectionYellow.png'

export interface SectionsMapProps {
  actualSection: number
  navigateToSection: (sectionNumber: SectionsTypes) => void
}

export function SectionsMap({
  actualSection = 1,
  navigateToSection,
}: SectionsMapProps) {
  const { darkTheme } = useDarkTheme()

  return (
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
          <View style={styles.yellowLockerSectionContainer}>
            <Pressable
              onPress={() => {
                navigateToSection(1)
              }}
            >
              <Image
                source={LockerSectionYellow}
                style={styles.lockerSectionImage}
              />
              {actualSection === 1 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
            <Pressable
              onPress={() => {
                navigateToSection(2)
              }}
            >
              <Image
                source={LockerSectionYellow}
                style={styles.lockerSectionImage}
              />
              {actualSection === 2 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
          </View>
          <View style={styles.redLockerSectionContainer}>
            <Pressable
              onPress={() => {
                navigateToSection(3)
              }}
            >
              <Image
                source={LockerSectionRed}
                style={styles.lockerSectionImage}
              />
              {actualSection === 3 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
            <Pressable
              onPress={() => {
                navigateToSection(4)
              }}
            >
              <Image
                source={LockerSectionRed}
                style={styles.lockerSectionImage}
              />
              {actualSection === 4 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
            <Pressable
              onPress={() => {
                navigateToSection(5)
              }}
            >
              <Image
                source={LockerSectionRed}
                style={styles.lockerSectionImage}
              />
              {actualSection === 5 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
          </View>
        </View>

        <View style={styles.secondRowContainer}>
          <View>
            <Pressable
              onPress={() => {
                navigateToSection(6)
              }}
            >
              <Image
                source={LockerSectionGreen}
                style={styles.lockerSectionImage}
              />
              {actualSection === 6 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
          </View>
          <View style={styles.blueLockerSectionContainer}>
            <Pressable
              onPress={() => {
                navigateToSection(7)
              }}
            >
              <Image
                source={LockerSectionBlue}
                style={styles.lockerSectionImage}
              />
              {actualSection === 7 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
            <Pressable
              onPress={() => {
                navigateToSection(8)
              }}
            >
              <Image
                source={LockerSectionBlue}
                style={styles.lockerSectionImage}
              />
              {actualSection === 8 ? (
                <View style={styles.actualSection} />
              ) : null}
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}
