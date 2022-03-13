import React from 'react'

import { TouchableOpacity, Text } from 'react-native'

import styles from './styles'

const Bubbles = ({ emoji = '', description = '', onPress }) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.15}
        pressMagnification={2}
        pressDuration={0.3}
        style={styles.container}>
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
