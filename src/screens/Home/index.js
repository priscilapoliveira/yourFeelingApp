import React from 'react'
import { View, Text, ScrollView } from 'react-native'

import Bubbles from '../../components/Bubbles'

import styles from './styles'

const Home = async () => {
  return (
    <>
      <View style={styles.container}>
        <Bubbles />
      </View>
    </>
  )
}

export default Home
