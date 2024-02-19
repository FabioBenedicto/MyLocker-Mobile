import React from 'react'
import { View, Text } from 'react-native'

import { MyButton } from '../../MyButton'

import { useUser } from '../../../hooks/useUser'
import { useDarkTheme } from '../../../hooks/useDarkTheme'

import { styles } from './styles'

import { DARK } from '../../../themes/dark'
import { LIGHT } from '../../../themes/light'

interface ApmSituationProps {
  situation: 'Em Análise' | 'Aprovada' | 'Rejeitada'
  setSendApm: (data: boolean) => void
}

export function ApmSituation({ situation, setSendApm }: ApmSituationProps) {
  const { user } = useUser()
  const { darkTheme } = useDarkTheme()

  const handleResendDiscountAplication = () => {
    setSendApm(true)
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkTheme
            ? DARK.COLORS.PANEL_BACKGROUND
            : LIGHT.COLORS.PANEL_BACKGROUND,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color: darkTheme
              ? DARK.COLORS.TEXT_PRIMARY
              : LIGHT.COLORS.TEXT_PRIMARY,
          },
        ]}
      >
        {situation}
      </Text>
      {situation === 'Em Análise' ? (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY,
              },
            ]}
          >
            Sua submissão está sendo analisada pelos funcionários da escola e
            logo você receberá o resultado do seu pedido de desconto.
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY,
              },
            ]}
          >
            Você já pode alugar um armário com o preço reduzido, porém se algo
            der errado no seu comprovante da APM, você será cobrado pela
            diferença no valor.
          </Text>
        </View>
      ) : situation === 'Aprovada' ? (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY,
              },
            ]}
          >
            Sua submissão foi analisada pelos funcionários da escola e seu
            pedido pelo desconto foi aprovado!
          </Text>
          <Text
            style={[
              styles.text,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY,
              },
            ]}
          >
            Você já pode alugar um armário com o preço reduzido sem mais
            preocupações.
          </Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              {
                color: darkTheme
                  ? DARK.COLORS.TEXT_SECONDARY
                  : LIGHT.COLORS.TEXT_SECONDARY,
              },
            ]}
          >
            Sua submissão foi analisada pelos funcinários da escola e
            infelizmente não foi aceita
          </Text>
          {user.apmCount < 3 ? (
            <>
              <Text
                style={[
                  styles.text,
                  {
                    color: darkTheme
                      ? DARK.COLORS.TEXT_SECONDARY
                      : LIGHT.COLORS.TEXT_SECONDARY,
                  },
                ]}
              >
                Você pode tentar novamente submetendo um novo comprovante ou
                alugar um armário com o preço normal.
              </Text>
              <MyButton onPress={handleResendDiscountAplication}>
                Submeter novamente
              </MyButton>
            </>
          ) : (
            <Text
              style={[
                styles.text,
                {
                  color: darkTheme
                    ? DARK.COLORS.TEXT_SECONDARY
                    : LIGHT.COLORS.TEXT_SECONDARY,
                },
              ]}
            >
              Você já submeteu 3 comprovantes e nenhum foi aceito. Portanto,
              este ano só será possível alugar um armário com o preço regular.
            </Text>
          )}
        </View>
      )}
    </View>
  )
}
