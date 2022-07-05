import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function Btn({ text, press }) {
    return (
        <View style={styles.containerSub}>
            <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={press}>
                <Text style={styles.txt}>{text}</Text>
            </TouchableOpacity>
        </View>
    );
}
