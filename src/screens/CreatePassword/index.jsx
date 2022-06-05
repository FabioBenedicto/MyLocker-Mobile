import React, { useState } from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function Verification() {
  const navigation = useNavigation();

  const verif = () => {
    if ((pass != '') && (conf != '')) {
      if (pass == conf) {
        return true;
      }
    }

    Alert.alert('>:(');
    return false;
  };

  const func = () => {
    if (verif()) {
      navigation.navigate('LoginP2');
    }
  };

  const cont = [createRef(), createRef()];

  const [pass, setPass] = useState('');
  const [conf, setConf] = useState('');

  const submitFunc = (num) => {
    if (num == 1) {
      func.apply();
      return;
    }

    cont[++num].current.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={Logo} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Criar Senha</Text>
          <Text style={styles.subtitle}>Crie uma senha para sua conta</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} value={pass} ref={cont[0]} placeholder="Senha" placeholderTextColor="#7D7B7B" onChangeText={(text) => setPass(text)} blurOnSubmit={false} onSubmitEditing={(e) => submitFunc(0)} />
          <TextInput style={styles.input} value={conf} ref={cont[1]} placeholder="Confirmar Senha" placeholderTextColor="#7D7B7B" onChangeText={(text) => setConf(text)} blurOnSubmit={false} onSubmitEditing={(e) => submitFunc(1)} />
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Esqueceu seu e-mail?</Text>
        </TouchableOpacity>

      </View>

      <Button text="Continuar" press={func} />
    </View>
  );
}
