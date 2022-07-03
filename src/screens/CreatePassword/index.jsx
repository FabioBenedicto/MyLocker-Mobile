import React, { useState, useEffect } from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Text, View, Image, TextInput, Alert, ScrollView, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function CreatePassword({ route }) {
    const navigation = useNavigation();
    const cont = [createRef(), createRef()];

    const [pass, setPass] = useState('');
    const [conf, setConf] = useState('');
    const [email, setEmail] = useState(route.params.passEmail);

    const func = () => {
        if (verif()) {
            navigation.navigate('LoginP2', {
                passEmail: email,
            });
            scrClear();
        }
    };

    const scrClear = () => {
        if (pass != '') {
            cont[0].current.clear();
        }

        if (conf != '') {
            cont[1].current.clear();
        }

        setPass('');
        setConf('');
    };

    const verif = () => {
        if ((pass != '') && (conf != '')) {
            if (pass == conf) {
                return true;
            }
        }

        Alert.alert('>:(');
        return false;
    };

    const submitFunc = (num) => {
        if (num == 1) {
            func.apply();
            return;
        }

        cont[++num].current.focus();
    };

    const backAction = () => {
        navigation.navigate('Login');

        scrClear();

        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
    }, []);

    return (
        <ScrollView>
            <View style={gStyles.container}>
                <View style={gStyles.container2}>
                    <View style={gStyles.imageContainer}>
                        <Image source={Logo} style={gStyles.image} />
                    </View>

                    <View style={gStyles.bodyContainer}>
                        <View style={gStyles.textContainer}>
                            <Text style={gStyles.title}>Criar Senha</Text>
                            <Text style={gStyles.subtitle}>Crie uma senha para sua conta</Text>
                        </View>

                        <View style={gStyles.inputContainer}>
                            <TextInput style={gStyles.input} value={pass} ref={cont[0]} placeholder="Senha" placeholderTextColor="#7D7B7B" onChangeText={(text) => setPass(text)} blurOnSubmit={false} onSubmitEditing={(e) => submitFunc(0)} />
                            <TextInput style={gStyles.input} value={conf} ref={cont[1]} placeholder="Confirmar Senha" placeholderTextColor="#7D7B7B" onChangeText={(text) => setConf(text)} blurOnSubmit={false} onSubmitEditing={(e) => submitFunc(1)} />
                        </View>
                    </View>

                </View>

                <Button text="Continuar" press={func} />
            </View>
        </ScrollView>
    );
}
