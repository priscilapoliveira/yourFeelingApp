import React from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Bubbles = ({ emoji }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity emoji={emoji} style={[styles.baseBubble]} />
      </View>
    </>
  )
}

export default Bubbles
