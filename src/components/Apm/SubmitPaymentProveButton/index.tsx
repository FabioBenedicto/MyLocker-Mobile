import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'

import * as DocumentPicker from 'expo-document-picker'

import { useToast } from 'react-native-toast-notifications'

import { MyButton } from '../../MyButton'

import { useUser } from '../../../hooks/useUser'
import { useDarkTheme } from '../../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'

import { FilePlus } from 'phosphor-react-native'

// import api from '../../../services/api'
// import { AxiosResponse } from 'axios'

import { studentTable } from '../../../database/studentTable'

export interface SubmitPaymentProveButtonProps {
  setSendApm: (data: boolean) => void
}

export function SubmitPaymentProve({
  setSendApm,
}: SubmitPaymentProveButtonProps) {
  const toast = useToast()

  const { user, setUser } = useUser()
  const { darkTheme } = useDarkTheme()

  const [apmPaymentComprove, setApmPaymentComprove] = useState<File>()
  const [loading, setLoading] = useState(false)

  const handleSelectPDF = async () => {
    const { assets, canceled } = await DocumentPicker.getDocumentAsync()

    if (canceled) {
      toast.show('Operação cancelada', { type: 'danger' })
      return
    }

    const selectedDocument = {
      name: assets[0].name,
      uri: assets[0].uri,
      type: assets[0].mimeType,
    }

    setApmPaymentComprove(JSON.parse(JSON.stringify(selectedDocument)))
  }

  const handleSubmitPaymenyProve = () => {
    if (apmPaymentComprove) {
      // const formData = new FormData()
      // formData.append('apmRequisitionPDF', apmPaymentComprove)
      // formData.append('student_ra', user.ra)

      // setLoading(true)
      // api
      //   .post('/apms', formData, { withCredentials: true })
      //   .then(res: AxiosResponse => {
      //     setLoading(false)
      //     setUser(res.data.student)
      //     setSendApm(false)
      //   })
      //   .catch(err => {
      //     setLoading(false)
      //     toast.show(err.response.data.erro, { type: 'danger' })
      //   })

      setLoading(true)
      setTimeout(() => {
        const index = studentTable.indexOf(
          studentTable.filter(student => student.email === user.email)[0],
        )
        studentTable[index].apm = [{ id: 1, status: 1 }]
        studentTable[index].apmCount = 1
        setLoading(false)
        setUser({ ...user, apmCount: 1, apm: [{ id: 1, status: 1 }] })
        setSendApm(false)
      }, 1500)
    }
  }

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleSelectPDF}
        style={[
          styles.selectFileContainer,
          {
            backgroundColor: darkTheme
              ? DARK.COLORS.PANEL_BACKGROUND
              : LIGHT.COLORS.PANEL_BACKGROUND,
          },
        ]}
      >
        <FilePlus
          size={60}
          weight='regular'
          color={
            darkTheme ? DARK.COLORS.TEXT_PRIMARY : LIGHT.COLORS.TEXT_PRIMARY
          }
        />
        <Text
          style={[
            styles.selectFileText,
            {
              color: darkTheme
                ? DARK.COLORS.TEXT_PRIMARY
                : LIGHT.COLORS.TEXT_PRIMARY,
            },
          ]}
        >
          Submeter comprovante de pagamento da APM
        </Text>
      </Pressable>
      {apmPaymentComprove && (
        <View style={styles.reviewFileContainer}>
          <Text
            style={[
              styles.reviewFileText,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_PRIMARY
                  : LIGHT.COLORS.TEXT_PRIMARY,
              },
            ]}
          >
            {apmPaymentComprove.name}
          </Text>
          <View style={styles.buttonContainer}>
            <MyButton
              text='Enviar!'
              loading={loading}
              onPress={handleSubmitPaymenyProve}
            />
          </View>
        </View>
      )}
    </View>
  )
}
