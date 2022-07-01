import React, { useState, useEffect } from 'react';
import { Text, View, Image, Alert, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import NotFoundImage from '../../assets/NotFound.png';
import UserImage from '../../assets/User.png';
import '../../components/gVar.js'


export default function Home() {
  const navigation = useNavigation();
  const [color, setColor] = useState(gColor);

  const func = () => {
    navigation.navigate('LockersMap');
  };

  const backAction = () => {
    Alert.alert('Calma!', 'Tem certeza que deseja voltar para tela de login?', [
      {
        text: 'Cancelar',
        onPress: () => null,
      },

      { text: 'Sim',
        onPress: () => navigation.navigate('Login') },
    ]);
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View style={styles.container}>

      <View style={[styles.header, { backgroundColor: color }]}>
        <MaterialIcons
          name="settings"
          size={24}
          style={styles.imageU2}
        />

        <View style={styles.user}>
          <Image style={styles.imageU} source={UserImage} />

          <View style={styles.textContainer}>
            <Text style={styles.titleU}>Fábio Benedicto</Text>
            <Text style={styles.subtitleU}>{gEmail}</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>

        <View style={styles.yourLocker}>
          <Text style={styles.title}>Meu Armário</Text>
          <View style={gStyles.line} />

          {/* <View style={styles.lockerContainer}>
            <View>
              <Text>Armário 752</Text>
              <Text>alugado em 25/03/2022</Text>
            </View>
          </View> */}

          <View style={styles.nolockerContainer}>
            <Image style={styles.image} source={NotFoundImage} />
            <Text style={styles.text}>Nenhum armário alugado</Text>
          </View>
        </View>

        <Button text="Alugar um Armário" press={func} />

      </View>
    </View>
  );
}
