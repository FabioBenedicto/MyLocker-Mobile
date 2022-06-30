import React, { useState, useEffect } from 'react';
import { Text, View, Image, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { setStatusBarHidden } from 'expo-status-bar';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import LockerContainer from '../../assets/LockerContainer.png';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
  }, []);

  const clearScr = () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
  };

  const func = () => {
    navigation.navigate('Payment');
  };

  const backAction = () => {
    Alert.alert('Calma!', 'Tem certeza que deseja voltar para tela de login?', [
      {
        text: 'Cancelar',
        onPress: () => null,
      },

      { text: 'Sim',
        onPress: () => { clearScr(); navigation.navigate('Login'); } },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  setStatusBarHidden(true);
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);

  return (
    <View style={gStyles.container}>

      <View style={styles.textContainer}>
        <Text style={[gStyles.title, styles.title]}>Alugue um Armário</Text>
        <Text style={gStyles.subtitle}>Selecione o bloco de armários que você deseja.</Text>
      </View>

      <View style={styles.lockerMapContainer}>

        <View style={styles.lockerMapLine}>

          <View style={styles.group}>
            <Text style={[gStyles.smallTitle, styles.lockerText]}>Sala 14</Text>
            <View style={styles.lockerImageBack} />
            <Image source={LockerContainer} style={styles.lockerImage} resizeMode="contain" />
          </View>

        </View>

      </View>

    </View>
  );
}
