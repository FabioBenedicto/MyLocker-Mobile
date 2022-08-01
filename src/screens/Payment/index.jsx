import React, { useEffect, useState } from 'react';
import { Text, View, Image, ScrollView, BackHandler, TouchableOpacity, Modal, Alert } from 'react-native';
import { setStatusBarHidden } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import gStyles from '../../components/gStyles';
import styles from './styles';
import Locker from '../../assets/Locker.png';
import Btn from '../../components/Button';

export default function Payment({ route }) {
    const navigation = useNavigation();
    const [email, setEmail] = useState(route.params.passEmail);
    const [locker, setLocker] = useState(route.params.locker);
    const [color, setColor] = useState('#D1D1D1');
    const [alertV, setAlertV] = useState(false);

    useEffect(() => {
        setColor('#FF7B7B');
    }, []);

    const func = () => {
        navigation.navigate('Home', {
            passEmail: email,
        });
    };

    const backAction = () => {
        setAlertV(true);
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    setStatusBarHidden(true);

    return (
        <ScrollView>

            <Modal visible={alertV} transparent animationType="none">

                <TouchableOpacity style={gStyles.background} onPress={() => setAlertV(false)} />

                <View style={[gStyles.contentContainerAlert, { alignContent: 'center' }]}>

                    <View>
                        <Text style={[gStyles.smallTitle, { textAlign: 'center' }]}>Calma!</Text>
                    </View>

                    <View style={[gStyles.lockerInfo, { padding: 20 }]}>
                        <View style={[{ flex: 1, alignSelf: 'center' }]}>
                            <Text style={[gStyles.smallSubtitle, { textAlign: 'center' }]}>Caso volte, a compra será cancelada!</Text>
                            <Text style={[gStyles.smallSubtitle, { textAlign: 'center' }]}>Tem certeza que deseja continuar?</Text>
                        </View>
                        <View style={[gStyles.line, { marginTop: 30 }]} />
                        <View style={[gStyles.lineInfo, { padding: 10, paddingRight: 45 }]}>
                            <TouchableOpacity style={[gStyles.linkContainer, { alignSelf: 'flex-start' }]} onPress={() => setAlertV(false)}>
                                <Text style={gStyles.linkText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[gStyles.linkContainer, { alignSelf: 'flex-end' }]} onPress={() => navigation.navigate('Home', { passEmail: email })}>
                                <Text style={gStyles.linkText}>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </Modal>

            <View style={[gStyles.container, styles.container]}>

                <View style={[gStyles.header, { marginBottom: 40 }]} />

                <View style={styles.main}>

                    <View style={[gStyles.textContainer, { flex: 1.5 }]}>

                        <Text style={gStyles.title/* [gStyles.title, { fontFamily: 'Roboto_400Regular' }] */}>Alugue um Armário</Text>

                        <Text style={gStyles.subtitle}>Revise seu pedido e realize o pagamento</Text>

                    </View>

                    <View style={styles.lockerContainer}>

                        <View style={styles.lockerContainer2}>

                            <View style={[styles.lockerImageContainer, { backgroundColor: color }]}>
                                <Image source={Locker} style={styles.lockerImage} />
                            </View>

                            <View>
                                <Text style={gStyles.smallTitle}>Armário {locker}</Text>
                                <Text style={[gStyles.smallSubtitle, { textAlign: 'right' }]}>R$200,00</Text>
                            </View>

                        </View>

                        <View style={gStyles.lockerInfo}>

                            <View style={gStyles.lineInfo}>
                                <Text style={gStyles.smallSubtitle}>Andar:</Text>
                                <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Segundo</Text>
                            </View>

                            <View style={gStyles.lineInfo}>
                                <Text style={gStyles.smallSubtitle}>Cor:</Text>
                                <View style={styles.colorContent}>
                                    <Text style={[gStyles.smallSubtitle, { color: '#535353' }]}>Vermelho</Text>
                                    <View style={gStyles.color} />
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

                    </View>

                    <View style={styles.priceContainer}>

                        <View style={styles.linePrice}>
                            <Text style={styles.titlePrice}>Subtotal</Text>
                            <Text style={styles.titlePrice}>R$200,00</Text>
                        </View>

                        <View style={styles.linePrice}>
                            <Text style={[gStyles.smallSubtitle, { color: '#868686' }]}>Desconto APM</Text>
                            <Text style={[gStyles.smallSubtitle, { color: '#868686' }]}>(50%) - R$100,00</Text>
                        </View>

                        <View style={gStyles.line} />

                        <View style={styles.linePrice}>
                            <Text style={styles.titlePrice}>Total</Text>
                            <Text style={styles.titlePrice}>R$100,00</Text>
                        </View>

                    </View>

                </View>

                <View style={styles.buttonContainer}>
                    <Btn text="Alugar Armário" press={func} />
                </View>

            </View>

        </ScrollView>
    );
}
