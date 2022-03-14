import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Button = ({ text, onPress, primary, primaryTextButton }) => {
  var primary
  var primaryTextButton

  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          primary ? styles.primaryButton : styles.whiteButton,
        ]}
        onPress={onPress}>
        <Text
          style={[
            primaryTextButton
              ? styles.primaryTextButton
              : styles.whiteTextButton,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default Button
