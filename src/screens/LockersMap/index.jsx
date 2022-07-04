import React, { useState, useEffect, createRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import Logo from '../../assets/Logo.png';
import LockerContainerY from '../../assets/LockerContainerY.png';
import LockerContainerR from '../../assets/LockerContainerR.png';
import LockerContainerG from '../../assets/LockerContainerG.png';
import LockerContainerB from '../../assets/LockerContainerB.png';
import Locker from '../../assets/Locker.png';

export default function LockersMap({ route }) {
    const navigation = useNavigation();
    const [email, setEmail] = useState(route.params.passEmail);

    const [mapLocker, setMapLocker] = useState([
        { key: '1', type: true, data: 'Sala 10' },
        { key: '2', type: false, data: LockerContainerY, pressFunc: () => { loadLockers('#FDFF97'); } },
        { key: '3', type: true, data: 'Sala 11' },
        { key: '4', type: false, data: LockerContainerY, pressFunc: () => { loadLockers('#FDFF97'); } },
        { key: '5', type: true, data: 'Sala 12' },
        { key: '6', type: 'line' },
        { key: '7', type: true, data: 'Saúde' },
        { key: '8', type: false, data: LockerContainerR, pressFunc: () => { loadLockers('#FF7B7B'); } },
        { key: '9', type: true, data: 'Sala 13' },
        { key: '10', type: false, data: LockerContainerR, pressFunc: () => { loadLockers('#FF7B7B'); } },
        { key: '11', type: true, data: 'Sala 14' },
        { key: '12', type: false, data: LockerContainerR, pressFunc: () => { loadLockers('#FF7B7B'); } },
        { key: '13', type: true, data: 'Sala 15' },
        { key: '14', type: 'line' },
        { key: '15', type: true, data: 'Sala 2' },
        { key: '16', type: false, data: LockerContainerG, pressFunc: () => { loadLockers('#A6FFEA'); } },
        { key: '17', type: true, data: 'Sala 3' },
        { key: '18', type: 'line' },
        { key: '19', type: true, data: 'Vestiário Masculino' },
        { key: '20', type: false, data: LockerContainerB, pressFunc: () => { loadLockers('#92B7FF'); } },
        { key: '21', type: true, data: 'Sala 4' },
        { key: '22', type: false, data: LockerContainerB, pressFunc: () => { loadLockers('#92B7FF'); } },
        { key: '23', type: true, data: 'Sala 5' },
    ]);

    const func = () => {
        navigation.navigate('Payment', {
            passEmail: email,
        });
    };

    const [lockers, setLockers] = useState();
    const [visible, setVisible] = useState('flex');
    const [visible2, setVisible2] = useState('none');

    const loadLockers = (passColor) => {
        setLockers([
            { key: '1', available: true, color: passColor, pressFunc: () => func() },
            { key: '2', available: true, color: passColor, pressFunc: () => func() },
            { key: '3', available: true, color: passColor, pressFunc: () => func() },
            { key: '4', available: true, color: passColor, pressFunc: () => func() },
            { key: '5', available: true, color: passColor, pressFunc: () => func() },
            { key: '6', available: true, color: passColor, pressFunc: () => func() },
            { key: '7', available: true, color: passColor, pressFunc: () => func() },
            { key: '8', available: true, color: passColor, pressFunc: () => func() },
            { key: '9', available: true, color: passColor, pressFunc: () => func() },
            { key: '10', available: true, color: passColor, pressFunc: () => func() },
            { key: '11', available: true, color: passColor, pressFunc: () => func() },
            { key: '12', available: true, color: passColor, pressFunc: () => func() },
        ]);

        setVisible('none');
        setVisible2('flex');
    };

    const backAction = () => {
        navigation.navigate('Home', {
            passEmail: email,
        });

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

            <FlatList
                style={[styles.flatlistL, { display: visible }]}
                data={mapLocker}
                renderItem={({ item }) => {
                    if (item.type == 'line') {
                        return (<View style={[gStyles.line, styles.line]} />);
                    }

                    if (item.type) {
                        return (<Text style={[gStyles.title, styles.flatData]}> {item.data} </Text>);
                    }

                    return (<TouchableOpacity onPress={item.pressFunc} style={styles.flatData}><Image source={item.data} style={styles.lockerImage} resizeMode="contain" /></TouchableOpacity>);
                }}
            />

            <FlatList
                style={[styles.flatlist, { display: visible2 }]}
                data={lockers}
                numColumns={4}
                renderItem={({ item }) => (
                    <View>
                        <TouchableOpacity onPress={item.pressFunc} style={styles.flatDataL}>
                            <Image source={Locker} style={[styles.lockerImageL, { backgroundColor: item.color }]} resizeMode="contain" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>

    );
}
