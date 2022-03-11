import React from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Bubbles = ({ emoji = ' ', description = ' ' }) => {
  return (
    <>
      <TouchableOpacity style={styles.container}>
        <Text
          style={[
            styles.text,
            description.length <= 3
              ? styles.smallBubble
              : description.length <= 5
              ? styles.mediumBubble
              : styles.largeBubble,
          ]}>
          {emoji}
          {'\n'}
          {description}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default Bubbles
