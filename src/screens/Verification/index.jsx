import React, { useState, useEffect } from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function Verification() {
  const navigation = useNavigation();

  const func = () => {
    if (verif()) {
      navigation.navigate('CreatePassword');
    } else {
      Alert.alert('>:(');
    }
  };

  const verif = () => {
    let auxContagem = 0;

    c.forEach((aux) => {
      if (aux == '') {
        auxContagem++;
      }
    });

    if (auxContagem == 0) {
      return true;
    }

    return false;
  };

  const cont = [createRef(), createRef(), createRef(), createRef(), createRef(), createRef()];

  const [c, setC] = useState(['', '', '', '', '', '']);

  useEffect(() => {
    if (verif()) {
      func.apply();
    }
  }, [c]);

  const changeTextC = (text, num) => {
    const auxArray = [];
    let i = 0;
    c.forEach((auxElement) => {
      auxArray[i] = auxElement;
      i += 1;
    });

    auxArray[num] = text;

    setC(auxArray);

    if (text.length == 1) {
      if (num == 5) {
        return;
      }

      cont[++num].current.focus();
    }
  };

  const handleKeyPress = (e, num) => {
    if (num == 0) {
      return;
    }

    if (c[num].length == 1) {
      return;
    }

    num--;

    if (e.nativeEvent.key == 'Backspace') {
      cont[num].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={Logo} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Verifique seu e-mail</Text>
          <Text style={styles.subtitle}>Digite o código enviado para o seu e-mail</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} ref={cont[0]} maxLength={1} value={c[0]} onKeyPress={(e) => handleKeyPress(e, 0)} onChangeText={(text) => changeTextC(text, 0)} />
          <TextInput style={styles.input} ref={cont[1]} maxLength={1} value={c[1]} onKeyPress={(e) => handleKeyPress(e, 1)} onChangeText={(text) => changeTextC(text, 1)} />
          <TextInput style={styles.input} ref={cont[2]} maxLength={1} value={c[2]} onKeyPress={(e) => handleKeyPress(e, 2)} onChangeText={(text) => changeTextC(text, 2)} />
          <TextInput style={styles.input} ref={cont[3]} maxLength={1} value={c[3]} onKeyPress={(e) => handleKeyPress(e, 3)} onChangeText={(text) => changeTextC(text, 3)} />
          <TextInput style={styles.input} ref={cont[4]} maxLength={1} value={c[4]} onKeyPress={(e) => handleKeyPress(e, 4)} onChangeText={(text) => changeTextC(text, 4)} />
          <TextInput style={styles.input} ref={cont[5]} maxLength={1} value={c[5]} onKeyPress={(e) => handleKeyPress(e, 5)} onChangeText={(text) => changeTextC(text, 5)} />
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Reenviar código</Text>
        </TouchableOpacity>

      </View>

      <Button text="Continuar" press={func} />
    </View>
  );
}
