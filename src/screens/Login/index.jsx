import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ScrollView, Modal } from 'react-native';
import { createRef } from 'react/cjs/react.production.min';
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
      navigation.navigate('Verification');
    }
  };

  const refImg = createRef();

  const [email, setEmail] = useState('');
  const [modV, setModV] = useState(false);

  return (
    <ScrollView>

      <View style={gStyles.container}>

        <Modal visible={modV} transparent animationType="none">

          <TouchableOpacity style={gStyles.background} onPress={() => setModV(false)} />

          <View style={gStyles.contentContainer}>

            <Text style={gStyles.modalTitle}>aaaaaaaaaaa</Text>
            <Text style={gStyles.modalText}>aaaa</Text>

            <Button text="Fechar" press={() => setModV(false)} />

          </View>

        </Modal>

        <View style={gStyles.container2}>
          <View style={gStyles.imageContainer} ref={refImg}>
            <Image source={Logo} style={gStyles.image} />
          </View>

          <View style={gStyles.bodyContainer}>
            <View style={gStyles.textContainer}>
              <Text style={gStyles.title}>Entrar</Text>
              <Text style={gStyles.subtitle}>Digite seu e-mail da Unicamp</Text>
            </View>

            <View style={gStyles.inputContainer}>
              <TextInput style={gStyles.input} value={email} placeholder="Esqueceu seu e-mail?" placeholderTextColor="#7D7B7B" onChangeText={(text) => setEmail(text)} blurOnSubmit={false} onSubmitEditing={(e) => func()} />
            </View>

            <TouchableOpacity style={gStyles.linkContainer} onPress={() => setModV(true)}>
              <Text style={gStyles.linkText}>Esqueceu seu e-mail?</Text>
            </TouchableOpacity>

          </View>

        </View>

        <Button text="Continuar" press={func} />
      </View>
    </ScrollView>
  );
}
