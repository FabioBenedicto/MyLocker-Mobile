import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Btn({ text, where }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={() => { navigation.navigate(where); }}>
      <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    /* borderRadius: 10,
    marginTop: 70,
    padding: 10, */

    // marginTop: (height / 100) * 9.5,
    // marginBottom: (height / 100) * 9.5,

    position: 'absolute',
    bottom: (height / 100) * 6,

    width: '80%',

    borderRadius: (height / 100) * 2,

    padding: (height / 100) * 1.6,

    backgroundColor: '#0085FF',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  txt: {
    color: 'white',
    fontSize: (height / 100) * 3.6,
    fontWeight: '500',
  },
});
