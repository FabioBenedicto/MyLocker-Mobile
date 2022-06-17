import React, { useState, useEffect } from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
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
    <ScrollView>
      <View style={gStyles.container}>
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
              <TextInput style={[gStyles.input, styles.input]} ref={cont[0]} maxLength={1} value={c[0]} onKeyPress={(e) => handleKeyPress(e, 0)} onChangeText={(text) => changeTextC(text, 0)} />
              <TextInput style={[gStyles.input, styles.input]} ref={cont[1]} maxLength={1} value={c[1]} onKeyPress={(e) => handleKeyPress(e, 1)} onChangeText={(text) => changeTextC(text, 1)} />
              <TextInput style={[gStyles.input, styles.input]} ref={cont[2]} maxLength={1} value={c[2]} onKeyPress={(e) => handleKeyPress(e, 2)} onChangeText={(text) => changeTextC(text, 2)} />
              <TextInput style={[gStyles.input, styles.input]} ref={cont[3]} maxLength={1} value={c[3]} onKeyPress={(e) => handleKeyPress(e, 3)} onChangeText={(text) => changeTextC(text, 3)} />
              <TextInput style={[gStyles.input, styles.input]} ref={cont[4]} maxLength={1} value={c[4]} onKeyPress={(e) => handleKeyPress(e, 4)} onChangeText={(text) => changeTextC(text, 4)} />
              <TextInput style={[gStyles.input, styles.input]} ref={cont[5]} maxLength={1} value={c[5]} onKeyPress={(e) => handleKeyPress(e, 5)} onChangeText={(text) => changeTextC(text, 5)} />
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
