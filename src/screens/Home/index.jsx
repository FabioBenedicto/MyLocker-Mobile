import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Image, Alert, BackHandler, Modal, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import NotFoundImage from '../../assets/NotFound.png';
import Locker from '../../assets/Locker.png';
import UserImage from '../../assets/User.png';

export default function Home({ route }) {
    const navigation = useNavigation();
    const [locker, setLocker] = useState({
        key: 757,
        color: '#FF7B7B',
    });
    const [email, setEmail] = useState(route.params.passEmail);
    const [alertV, setAlertV] = useState(false);
    const { width, height } = Dimensions.get('window');
    const anV = useRef(new Animated.ValueXY({ x: 0, y: height })).current;
    const [modV, setModV] = useState([false]);

    const func = () => {
        navigation.navigate('LockersMap', {
            passEmail: email,
        });
    };

    const backAction = () => {
        setAlertV(true);
        return true;
    };

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

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    return (
        <View style={styles.container}>

            <Modal visible={modV} transparent animationType="none">

                <TouchableOpacity style={gStyles.background} onPress={() => setModV(false)} />

                <Animated.View style={[gStyles.contentContainer, anV.getLayout()]}>

                    <View>
                        <View>
                            <Text style={[gStyles.smallTitle, { textAlign: 'center' }]}>Armário {locker.key}</Text>
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
                                    <View style={[gStyles.color, { backgroundColor: locker.color }]} />
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

                        </View>

                        <Button text="Fechar" press={() => setModV(false)} />

                    </View>

                </Animated.View>

            </Modal>

            <Modal visible={alertV} transparent animationType="none">

                <TouchableOpacity style={gStyles.background} onPress={() => setAlertV(false)} />

                <View style={[gStyles.contentContainerAlert, { alignContent: 'center' }]}>

                    <View>
                        <Text style={[gStyles.smallTitle, { textAlign: 'center' }]}>Calma!</Text>
                    </View>

                    <View style={[gStyles.lockerInfo, { padding: 20 }]}>
                        <View style={[{ flex: 1, alignSelf: 'center' }]}>
                            <Text style={[gStyles.smallSubtitle, { textAlign: 'center' }]}>Tem certeza que deseja voltar para tela de login?</Text>
                        </View>
                        <View style={[gStyles.line, { marginTop: 30 }]} />
                        <View style={[gStyles.lineInfo, { padding: 10, paddingRight: 45 }]}>
                            <TouchableOpacity style={[gStyles.linkContainer, { alignSelf: 'flex-start' }]} onPress={() => setAlertV(false)}>
                                <Text style={gStyles.linkText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[gStyles.linkContainer, { alignSelf: 'flex-end' }]} onPress={() => navigation.navigate('Login', { passEmail: email })}>
                                <Text style={gStyles.linkText}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </Modal>

            <View style={[styles.header, { backgroundColor: locker.color }]}>
                <TouchableOpacity>
                    <MaterialIcons
                        name="settings"
                        size={24}
                        style={styles.imageU2}
                    />
                </TouchableOpacity>

                <View style={styles.user}>
                    <Image style={styles.imageU} source={UserImage} />

                    <View style={styles.textContainer}>
                        <Text style={styles.titleU}>Fábio Benedicto</Text>
                        <Text style={styles.subtitleU}>{email}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.body}>

                <View style={styles.yourLocker}>
                    <Text style={styles.title}>Meu Armário</Text>
                    <View style={gStyles.line} />

                    <TouchableOpacity onPress={() => anStart()}>
                        <View style={styles.lockerContainer}>

                            <View style={styles.lockerContainer2}>

                                <View style={[styles.lockerImageContainer, { backgroundColor: locker.color }]}>
                                    <Image source={Locker} style={styles.lockerImage} />
                                </View>

                                <View>
                                    <Text style={gStyles.smallTitle}>Armário {locker.key}</Text>
                                    <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Alugado em 25/03/2022</Text>
                                </View>

                            </View>

                        </View>
                    </TouchableOpacity>

                    {/* <View style={styles.nolockerContainer}>
                        <Image style={styles.image} source={NotFoundImage} />
                        <Text style={styles.text}>Nenhum armário alugado</Text>
                    </View> */}
                </View>

                <Button text="Alugar um Armário" press={func} />

            </View>
        </View>
    );
}
