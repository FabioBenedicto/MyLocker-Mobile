import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import NotFoundImage from '../../assets/NotFound.png'
import UserImage from "../../assets/User.png";

export default function Home() {

  const [color, setColor] = useState('#D1D1D1')


  return (
    <View style={styles.container}>

      <View style={[styles.header, { backgroundColor: color }]}>
        <MaterialIcons
          name={"settings"}
          size={24}
          style={styles.imageU2}
        />

        <View style={styles.user}>
          <Image style={styles.imageU} source={UserImage} />

          <View style={styles.textContainer}>
            <Text style={styles.titleUserU}>Fábio Benedicto</Text>
            <Text style={styles.subtitleU}>cl200126@g.unicamp.br</Text>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>Meu Armário</Text>
        <View style={styles.line} />

        <View style={styles.lockerContainer}>
          <View>
            <Text>Armário 752</Text>
            <Text>alugado em 25/03/2022</Text>
          </View>
        </View>

        <View style={styles.nolockerContainer}>
          <Image style={styles.image} source={NotFoundImage} />
          <Text style={styles.text}>Nenhum armário alugado</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={() => { }}
        >
          <Text style={styles.btnText}>Alugar um Armário</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}