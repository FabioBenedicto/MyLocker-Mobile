import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function Btn({ text, press }) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={press}>
      <Text style={styles.txt}>{text}</Text>
    </TouchableOpacity>
  );
}
