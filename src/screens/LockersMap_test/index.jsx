import React, { useState, useEffect, createRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import Logo from '../../assets/Logo.png';
import '../../components/gVar.js'
import LockerContainerY from '../../assets/LockerContainerY.png';
import LockerContainerR from '../../assets/LockerContainerR.png';
import LockerContainerG from '../../assets/LockerContainerG.png';
import LockerContainerB from '../../assets/LockerContainerB.png';

export default function Login() {
  const navigation = useNavigation();

  const [mapLocker, setMapLocker] = useState([
    { key: '1', type: true, data: 'Sala 10'},
    { key: '2', type: false, data: LockerContainerY},
    { key: '3', type: true, data: 'Sala 11'},
    { key: '4', type: false, data: LockerContainerY},
    { key: '5', type: true, data: 'Sala 12'},
    { key: '6', type: true, data: 'Saúde'},
    { key: '7', type: false, data: LockerContainerR},
    { key: '8', type: true, data: 'Sala 13'},
    { key: '9', type: false, data: LockerContainerR},
    { key: '10', type: true, data: 'Sala 14'},
    { key: '11', type: false, data: LockerContainerR},
    { key: '12', type: true, data: 'Sala 15'},
    { key: '13', type: true, data: 'Sala 2'},
    { key: '14', type: false, data: LockerContainerG},
    { key: '15', type: true, data: 'Sala 3'},
    { key: '16', type: true, data: 'Vestiário Masculino'},
    { key: '17', type: false, data: LockerContainerB},
    { key: '18', type: true, data: 'Sala 4'},
    { key: '19', type: false, data: LockerContainerB},
    { key: '20', type: true, data: 'Sala 5'}
])

  const backAction = () => {
    navigation.navigate('Home');

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  return (
    <View style={[gStyles.container, styles.container]}>

        <View style={styles.textContainer}>
            <Text style={gStyles.title}>Alugue um Armário</Text>
            <Text style={gStyles.subtitle}>Selecione o bloco de armários que você deseja.</Text>
        </View>

        <FlatList style={styles.flatlist}
            data={mapLocker}

            renderItem = {({ item }) => {
                if(item.type){
                    return( <Text style = {[gStyles.title, styles.flatData]}> {item.data} </Text> )
                }
                else {
                    return( <TouchableOpacity style={styles.flatData}><Image source={item.data} style={styles.lockerImage} resizeMode="contain" /></TouchableOpacity> )
                }
            }}
        />

    </View>
    
  );
}
