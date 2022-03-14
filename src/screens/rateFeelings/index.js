import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../components/Header'

import styles from './styles'

const RateFeelings = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const [paramsFeelings, setParamsFeeling] = useState({})
  const [rateFeeling, setRateFeeling] = useState()

  useEffect(() => {
    setParamsFeeling(route.params)
  }, [route, setParamsFeeling])

  return (
    <>
      <Header backBlack back={'<'} onPress={navigation.goBack} />

      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={['#ffffff', '#9d8cea', '#8573d6', '#7C64E3']}
        style={styles.container}>
        <Text style={styles.feelingEmoji}>{paramsFeelings.emoji}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>I'm feeling</Text>
          <Text style={styles.feelingText}>
            {rateFeeling} {paramsFeelings.text}
          </Text>
        </View>
      </LinearGradient>
    </>
  )
}

export default RateFeelings
