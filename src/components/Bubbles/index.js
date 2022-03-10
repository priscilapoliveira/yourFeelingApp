import React from 'react'

import { View, TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Bubbles = ({ emoji = '', description = '' }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          emoji={emoji}
          description={description}
          style={[
            description.length >= 4
              ? styles.smallBubble
              : description.length >= 6
              ? styles.mediumBubble
              : styles.largeBubble,
          ]}
        />
      </View>
    </>
  )
}

export default Bubbles
