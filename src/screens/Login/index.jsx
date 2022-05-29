import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Btn from '../../components/Btn';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <View style={styles.teste}>

        <Image source={Logo} style={styles.image} />
        <Text style={styles.title}>Entrar</Text>

        <Text style={styles.subtitle}>Digite seu e-mail da Unicamp</Text>
        <TextInput style={styles.input} value={email} onChangeText={(text) => { setEmail(text); }} placeholder="E-mail institucional" placeholderTextColor="#7D7B7B" />

        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>Esqueceu seu e-mail?</Text>
        </View>

      </View>

      <Btn text="Continuar" where="Home" />

    </View>
  );
}
