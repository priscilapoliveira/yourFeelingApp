import React, { useEffect } from 'react'

import { useRoute, useNavigation } from '@react-navigation/native'

import styles from './styles'

const RateFeelings = () => {
  const route = useRoute()
  useEffect(() => {
    let eita = ({ emoji, text } = route.params)
    console.log(eita)
  }, [route])

  return <></>
}

export default RateFeelings
