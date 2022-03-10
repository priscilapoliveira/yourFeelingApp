import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import api from '../../services/api'

import Bubbles from '../../components/Bubbles'

import styles from './styles'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get()
      .then((response) => {
        const { data } = response.data

        setData(data)
      })
      .catch((error) => console.log(error))
  }, [setData])

  return (
    <>
      <View style={styles.container}>
        <Bubbles />
      </View>
    </>
  )
}

export default Home
