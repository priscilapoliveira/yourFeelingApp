import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Button = ({ text, onPress, primary, primaryText }) => {
  var primary
  var primaryText

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
            primaryText ? styles.primaryTextButton : styles.whiteTextButton,
          ]}>
          {text}
        </Text>
      </TouchableOpacity>
    </>
  )
}

export default Button
