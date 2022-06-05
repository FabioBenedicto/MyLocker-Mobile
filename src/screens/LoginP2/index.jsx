import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function Login() {
  const navigation = useNavigation();

  const verif = () => {
    if (email != '') {
      return true;
    }

    Alert.alert('>:(');
    return false;
  };

  const func = () => {
    if (verif()) {
      navigation.navigate('Home');
    }
  };

  const [email, setEmail] = useState('cl200126@g.unicamp.br');
  const [pass, setPass] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Image source={Logo} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.title}>Entrar</Text>
          <Text style={styles.subtitle}>Digite seu e-mail da Unicamp</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputDisable} value={email} editable={false} selectTextOnFocus={false} placeholder="Esqueceu seu e-mail?" placeholderTextColor="#7D7B7B" />
          <TextInput style={styles.input} value={pass} placeholder="Senha" placeholderTextColor="#7D7B7B" onChangeText={(text) => setPass(text)} blurOnSubmit={false} onSubmitEditing={(e) => func()} />
        </View>

        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.linkText}>Esqueceu seu e-mail?</Text>
        </TouchableOpacity>

      </View>

      <Button text="Continuar" press={func} />
    </View>
  );
}
