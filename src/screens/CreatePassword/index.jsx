import React, { useState } from 'react';
import { createRef } from 'react/cjs/react.production.min';
import { Text, View, Image, TextInput, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
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
