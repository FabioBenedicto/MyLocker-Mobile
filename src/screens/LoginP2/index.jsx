import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles';
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
    <ScrollView>
      <View style={gStyles.container}>
        <View style={gStyles.container2}>
          <View style={gStyles.imageContainer}>
            <Image source={Logo} style={gStyles.image} />
          </View>

          <View style={gStyles.bodyContainer}>
            <View style={gStyles.textContainer}>
              <Text style={gStyles.title}>Entrar</Text>
              <Text style={gStyles.subtitle}>Digite seu e-mail da Unicamp</Text>
            </View>

            <View style={gStyles.inputContainer}>
              <TextInput style={[gStyles.input, styles.inputDisable]} value={email} editable={false} selectTextOnFocus={false} placeholder="E-mail" placeholderTextColor="#7D7B7B" />
              <TextInput style={gStyles.input} value={pass} placeholder="Senha" placeholderTextColor="#7D7B7B" onChangeText={(text) => setPass(text)} blurOnSubmit={false} onSubmitEditing={(e) => func()} />
            </View>

            <TouchableOpacity style={gStyles.linkContainer}>
              <Text style={gStyles.linkText}>Esqueceu seu e-mail?</Text>
            </TouchableOpacity>
          </View>

        </View>

        <Button text="Continuar" press={func} />
      </View>
    </ScrollView>
  );
}
