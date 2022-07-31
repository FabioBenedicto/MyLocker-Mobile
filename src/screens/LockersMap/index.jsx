import React, { useState, useEffect, createRef, useRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, FlatList, BackHandler, Dimensions, Modal, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { setStatusBarHidden } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import gStyles from '../../components/gStyles';
import styles from './styles';
import LockerContainerY from '../../assets/LockerContainerY.png';
import LockerContainerR from '../../assets/LockerContainerR.png';
import LockerContainerG from '../../assets/LockerContainerG.png';
import LockerContainerB from '../../assets/LockerContainerB.png';
import Locker from '../../assets/Locker.png';
import Button from '../../components/Button';

export default function LockersMap({ route }) {
    /* class locker {
        constructor(key, color, available) {
            this.key = key;
            this.color = color;
            this.available = available;

            if (available) {
                this.showColor = color;
            } else if (color == '#FF7B7B') {
                this.showColor = '#963D3D';
            }

        }
    } */

    const navigation = useNavigation();
    const [email, setEmail] = useState(route.params.passEmail);
    const { width, height } = Dimensions.get('window');
    const [allLockers, setAllLockers] = useState(null);
    const [lockers, setLockers] = useState(null);
    const [navText, setNavText] = useState(['null', 'null']);
    const [visible, setVisible] = useState('flex');
    const [visible2, setVisible2] = useState('none');
    const [page, setPage] = useState(0);
    const [enable, setEnable] = useState(['#000000', '#000000']);
    const [modV, setModV] = useState([false]);
    const [modalL, setModalL] = useState({ key: '0', available: true, color: '#B0B0B0' });
    const [text, setText] = useState('Selecione o bloco de armários que você deseja.');
    const anV = useRef(new Animated.ValueXY({ x: 0, y: height })).current;
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
    let auxAvalible = { backgroundColor: '#4ECB71' };
    let HOWMANY = 12;

    if (height >= 800) {
        HOWMANY = 16;
    }

    const func = (item) => {
        navigation.navigate('Payment', {
            passEmail: email,
            locker: item,
        });
    };

    const modal = (item) => {
        setModV(true);
    };

    const loadLockers = (passColor) => {
        setAllLockers([
            { key: '1', available: true, color: passColor },
            { key: '2', available: true, color: passColor },
            { key: '3', available: true, color: passColor },
            { key: '4', available: true, color: passColor },
            { key: '5', available: true, color: passColor },
            { key: '6', available: true, color: passColor },
            { key: '7', available: true, color: passColor },
            { key: '8', available: true, color: passColor },
            { key: '9', available: true, color: passColor },
            { key: '10', available: true, color: passColor },
            { key: '11', available: true, color: passColor },
            { key: '12', available: true, color: passColor },
            { key: '13', available: true, color: passColor },
            { key: '14', available: true, color: passColor },
            { key: '15', available: true, color: passColor },
            { key: '16', available: true, color: passColor },
            { key: '17', available: true, color: passColor },
            { key: '18', available: true, color: passColor },
            { key: '19', available: true, color: passColor },
            { key: '20', available: true, color: passColor },
            { key: '21', available: true, color: passColor },
            { key: '22', available: true, color: passColor },
            { key: '23', available: true, color: passColor },
            { key: '24', available: true, color: passColor },
            { key: '25', available: true, color: passColor },
            { key: '26', available: true, color: passColor },
            { key: '27', available: true, color: passColor },
            { key: '28', available: true, color: passColor },
            { key: '29', available: true, color: passColor },
            { key: '30', available: true, color: passColor },
            { key: '31', available: true, color: passColor },
            { key: '32', available: true, color: passColor },
            { key: '33', available: true, color: passColor },
        ]);
    };

    const backAction = () => {
        navigation.navigate('Home', {
            passEmail: email,
        });

        return true;
    };

    const go = () => {
        if (enable[1] != '#000000') {
            return;
        }
        setLockers(null);
        setPage(1 + page);
        // console.log(page);
    };

    const back = () => {
        if (enable[0] != '#000000') {
            return;
        }
        setLockers(null);
        setPage(page - 1);
        // console.log(page);
    };

    useEffect(() => {
        if (page < 0) {
            return;
        }
        try {
            const aux = [];

            for (let index = 0; index < HOWMANY; index++) {
                if (index + page * HOWMANY < allLockers.length && index + page * HOWMANY >= 0) {
                    // console.log(index);
                    aux.push(allLockers[index + page * HOWMANY]);
                }
            }

            // console.log(aux);
            if (aux.length > 0) { setLockers(aux); }
        } catch {
            // console.log('nop');
        }
    }, [page]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    useEffect(() => {
        if (allLockers != null) {
            const aux = [];

            for (let index = 0; index < HOWMANY; index++) {
                aux.push(allLockers[index]);
            }

            setLockers(aux);
            setText('Selecione o armário que você deseja.');
        }
    }, [allLockers]);

    useEffect(() => {
        try {
            if (lockers != null) {
                setNavText([lockers[0].key, lockers[lockers.length - 1].key]);
                setVisible('none');
                setVisible2('flex');

                if (lockers[lockers.length - 1].key == allLockers.length) {
                    enable[1] = '#B0B0B0';
                } else {
                    enable[1] = '#000000';
                }

                if (lockers[0].key == 1) {
                    enable[0] = '#B0B0B0';
                } else {
                    enable[0] = '#000000';
                }
            }
        } catch {
            // console.log('nop');
        }
    }, [lockers]);

    const anStart = () => {
        Animated.timing(
            anV,
            {
                toValue: { x: 0, y: height },
                duration: 2,
                useNativeDriver: false,
            },
        ).start();

        setTimeout(() => {
            if (modalL.available) {
                auxAvalible = { backgroundColor: '#4ECB71' };
            } else {
                auxAvalible = { backgroundColor: '#FF7B7B' };
            }
            setModV(true);

            Animated.timing(
                anV,
                {
                    toValue: { x: 0, y: height / 2 },
                    duration: 300,
                    useNativeDriver: false,
                },
            ).start();
        }, 2);
    };

    setStatusBarHidden(true);

    return (
        <View style={{ flex: 1 }}>

            <Modal visible={modV} transparent animationType="none">

                <TouchableOpacity style={gStyles.background} onPress={() => setModV(false)} />

                <Animated.View style={[gStyles.contentContainer, anV.getLayout()]}>

                    <View>
                        <View>
                            <Text style={[gStyles.smallTitle, { textAlign: 'center' }]}>Armário {modalL.key}</Text>
                        </View>

                        <View style={gStyles.lockerInfo}>

                            <View style={[gStyles.lineInfo]}>
                                <Text style={gStyles.smallSubtitle}>Andar:</Text>
                                <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Segundo</Text>
                            </View>

                            <View style={gStyles.lineInfo}>
                                <Text style={gStyles.smallSubtitle}>Cor:</Text>
                                <View style={styles.colorContent}>
                                    <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>sei la como faze a cor por ext</Text>
                                    <View style={[gStyles.color, { backgroundColor: modalL.color }]} />
                                </View>
                            </View>

                            <View style={gStyles.lineInfo}>
                                <Text style={gStyles.smallSubtitle}>À esquerda:</Text>
                                <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Saúde</Text>
                            </View>

                            <View style={gStyles.lineInfo}>
                                <Text style={gStyles.smallSubtitle}>À direita:</Text>
                                <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Sala 13</Text>
                            </View>

                            <View style={gStyles.lineInfo}>
                                <Text style={gStyles.smallSubtitle}>Situação:</Text>
                                <View style={styles.colorContent}>
                                    <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Disponível</Text>
                                    <View style={[gStyles.color, auxAvalible]} />
                                </View>
                            </View>

                        </View>

                    </View>

                    <Button text="Alugar" press={() => func(modalL.key)} />

                </Animated.View>

            </Modal>

            <View style={gStyles.header} />
            <View style={[gStyles.container, styles.container]}>

                <View style={styles.textContainer}>
                    <Text style={gStyles.title}>Alugue um Armário</Text>
                    <Text style={gStyles.subtitle}>{text}</Text>
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

                        return (<TouchableOpacity onPress={item.pressFunc} style={styles.flatDataL}><Image source={item.data} style={styles.lockerImage} resizeMode="contain" /></TouchableOpacity>);
                    }}
                />

                <View style={{ display: visible2 }}>
                    <FlatList
                        style={styles.flatlist}
                        data={lockers}
                        columnWrapperStyle={styles.row}
                        numColumns={4}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => { anStart(); setModalL(item); }} style={styles.flatData}>
                                    <Image source={Locker} style={[styles.lockerImageL, { backgroundColor: item.color }]} resizeMode="contain" />
                                </TouchableOpacity>
                            </View>
                        )}
                    />
                    <View style={styles.navLockers}>
                        <TouchableOpacity onPress={() => back()}>
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                color={enable[0]}
                                size={64}
                            />
                        </TouchableOpacity>

                        <View style={{ justifyContent: 'center' }}><Text style={gStyles.title}>{navText[0]}</Text></View>
                        <View style={{ justifyContent: 'center' }}><Text style={gStyles.title}> - </Text></View>
                        <View style={{ justifyContent: 'center' }}><Text style={gStyles.title}>{navText[1]}</Text></View>

                        <TouchableOpacity onPress={() => go()}>
                            <MaterialIcons
                                name="keyboard-arrow-right"
                                color={enable[1]}
                                size={64}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>

    );
}
