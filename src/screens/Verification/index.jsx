import React, { useState, useRef } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import styles from './styles';
import Logo from '../../assets/Logo.png';

export default function Verification() {
  const navigation = useNavigation();

  const func = () => {
    navigation.navigate('Home');
  }

  const refContainer = useRef(initialValue);

  const [c1, setC1] = useState('');
  const [c2, setC2] = useState('');
  const [c3, setC3] = useState('');
  const [c4, setC4] = useState('');
  const [c5, setC5] = useState('');
  const [c6, setC6] = useState('');

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>Verifique seu e-mail</Text>
        <Text style={styles.subtitle}>Digite o código enviado para o seu e-mail</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} maxLength={1} value={c1} onChangeText={(text) => { setC1(text); this.input_2.focus(); }} />
        <TextInput style={styles.input} ref={(input) => { this.input_2 = input; }} value={c2} onChangeText={(text) => { setC2(text); }} />
        <TextInput style={styles.input} value={c3} onChangeText={(text) => { setC3(text); }} />
        <TextInput style={styles.input} value={c4} onChangeText={(text) => { setC4(text); }} />
        <TextInput style={styles.input} value={c5} onChangeText={(text) => { setC5(text); }} />
        <TextInput style={styles.input} value={c6} onChangeText={(text) => { setC6(text); }} />
      </View>


      <Button text="Continuar" press={func} />
    </View>
  );
}