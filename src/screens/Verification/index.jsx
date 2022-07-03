import React, { useState, useEffect } from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function Verification({ route }) {
    const navigation = useNavigation();
    const cont = [createRef(), createRef(), createRef(), createRef(), createRef(), createRef()];

    const ALLOWED_CHARACTERS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 'r', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    const [c, setC] = useState([null, null, null, null, null, null]);
    const [cCode, setCCode] = useState('');
    const [email, setEmail] = useState(route.params.passEmail);

    const func = () => {
        if (verif()) {
            navigation.navigate('CreatePassword', {
                passEmail: email,
            });
            scrClear();
        } else {
            Alert.alert('>:(');
        }
    };

    const scrClear = () => {
        let empty = false;

        c.forEach((aux) => {
            if (aux == null) {
                empty = true;
            }
        });

        if (!empty) {
            cont.forEach((aux) => {
                aux.current.clear();
            });
        }

        setC(['', '', '', '', '', '']);
    };

    const verif = () => {
        let auxContagem = 0;

        c.forEach((aux) => {
            if (aux == null || aux.trim() == '') {
                auxContagem++;
            }
        });

        if (auxContagem == 0) {
            return true;
        }

        return false;
    };

    /*   const textChange = (e, num) => {
    if (ALLOWED_CHARACTERS.includes(e.nativeEvent.toLowerCase())) {
      const auxArray = [];
      let i = 0;
      c.forEach((auxElement) => {
        auxArray[i] = auxElement;
        i += 1;
      });

      auxArray[num] = e.nativeEvent.key;

      setC([auxArray[0], auxArray[1], auxArray[2], auxArray[3], auxArray[4], auxArray[5]]);

      if (num != 5) {
        cont[++num].current.focus();
      }
    }
  }; */

    const cChange = (back, e, num) => {
        const auxArray = [];
        let i = 0;
        c.forEach((auxElement) => {
            auxArray[i] = auxElement;
            i += 1;
        });

        if (back) {
            auxArray[num] = null;
        } else {
            auxArray[num] = e.nativeEvent.key;
        }

        setC([auxArray[0], auxArray[1], auxArray[2], auxArray[3], auxArray[4], auxArray[5]]);
    };

    const handleKeyPress = (e, num) => {
        if (ALLOWED_CHARACTERS.includes(e.nativeEvent.key.toLowerCase())) {
            cChange(false, e, num);

            if (num != 5) {
                cont[++num].current.focus();
            }
        }

        if (e.nativeEvent.key == 'Backspace') {
            cChange(true, e, num);

            if (num == 0) {
                return;
            }

            num--;
            cont[num].current.clear();
            cont[num].current.focus();
        }
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

    useEffect(() => {
        setCCode(c[0] + c[1] + c[2] + c[3] + c[4] + c[5]);

        if (verif()) {
            func.apply();
        }
    }, [c]);

    return (
        <ScrollView>
            <View style={[gStyles.container, styles.container]}>
                <View style={gStyles.container2}>
                    <View style={gStyles.imageContainer}>
                        <Image source={Logo} style={gStyles.image} />
                    </View>

                    <View style={gStyles.bodyContainer}>
                        <View style={gStyles.textContainer}>
                            <Text style={gStyles.title}>Verifique seu e-mail</Text>
                            <Text style={gStyles.subtitle}>Digite o código enviado para o seu e-mail</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput style={[gStyles.input, styles.input]} ref={cont[0]} maxLength={1} value={c[0]} onKeyPress={(e) => handleKeyPress(e, 0)} />
                            <TextInput style={[gStyles.input, styles.input]} ref={cont[1]} maxLength={1} value={c[1]} onKeyPress={(e) => handleKeyPress(e, 1)} />
                            <TextInput style={[gStyles.input, styles.input]} ref={cont[2]} maxLength={1} value={c[2]} onKeyPress={(e) => handleKeyPress(e, 2)} />
                            <TextInput style={[gStyles.input, styles.input]} ref={cont[3]} maxLength={1} value={c[3]} onKeyPress={(e) => handleKeyPress(e, 3)} />
                            <TextInput style={[gStyles.input, styles.input]} ref={cont[4]} maxLength={1} value={c[4]} onKeyPress={(e) => handleKeyPress(e, 4)} />
                            <TextInput style={[gStyles.input, styles.input]} ref={cont[5]} maxLength={1} value={c[5]} onKeyPress={(e) => handleKeyPress(e, 5)} />
                        </View>

                        <TouchableOpacity style={gStyles.linkContainer}>
                            <Text style={gStyles.linkText}>Reenviar código</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <Button text="Continuar" press={func} />
            </View>
        </ScrollView>
    );
}
