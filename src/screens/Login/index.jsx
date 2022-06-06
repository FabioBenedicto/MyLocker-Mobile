import React, { useState, useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Alert, Keyboard } from 'react-native';
import { createRef } from 'react/cjs/react.production.min';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';
import gStyles from '../../components/gStyles.js';
import styles from './styles.js'
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

  /*   const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        'keyboardDidShow',
        () => {
          setKeyboardVisible(true);
          refImg.style = { display: 'none' };
        }
      );
      const keyboardDidHideListener = Keyboard.addListener(
        'keyboardDidHide',
        () => {
          setKeyboardVisible(false); // or some other action
        }
      );
  
      return () => {
        keyboardDidHideListener.remove();
        keyboardDidShowListener.remove();
      };
    }, [isKeyboardVisible]); */

  const [email, setEmail] = useState('');

  return (
    <View style={gStyles.container}>
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

          <TouchableOpacity style={gStyles.linkContainer}>
            <Text style={gStyles.linkText}>Esqueceu seu e-mail?</Text>
          </TouchableOpacity>

        </View>

      </View>

      <Button text="Continuar" press={func} />
    </View>
  );
}
