import React, { useEffect } from 'react'

import { View } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'

import styles from './styles'

const RateFeelings = () => {
  const route = useRoute()
  useEffect(() => {
    let eita = ({ emoji, text } = route.params)
    console.log(eita)
  }, [route])

  return (
    <>
      <Header backBlack back={'voltar'} />
      <View></View>
    </>
  )
}

export default RateFeelings
