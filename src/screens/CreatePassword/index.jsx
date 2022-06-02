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
    navigation.navigate('Home');
  };

  const cont = [createRef(), createRef()];

  const [pass, setPass] = useState('');
  const [conf, setConf] = useState('');

  /*   const handleKeyPress = (e, num) => {
    if (num == 1) {
      func.apply();
    }

    if (e.nativeEvent.key == 'Enter') {
      cont[num].current.focus();
    }
  }; */

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={Logo} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Criar Senha</Text>
          <Text style={styles.subtitle}>Crie uma senha para sua conta</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={pass} onChangeText={(text) => setPass(text)} /* onKeyPress={(e) => handleKeyPress(e, 0)} */ />
          <TextInput style={styles.input} value={conf} onChangeText={(text) => setConf(text)} /* onKeyPress={(e) => handleKeyPress(e, 0)} */ />
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Esqueceu seu e-mail?</Text>
        </TouchableOpacity>

      </View>

      <Button text="Continuar" press={func} />
    </View>
  );
}
