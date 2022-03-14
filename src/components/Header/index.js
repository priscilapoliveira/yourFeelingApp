import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

const Header = ({ title, back, backBlack, backWhite, primary, whiteTitle }) => {
  var primary
  var backWhite

  return (
    <>
      <View
        style={[
          styles.container,
          primary ? styles.primaryColor : styles.whiteColor,
        ]}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={[
              styles.buttonContainer,
              backWhite ? styles.backWhite : styles.backBlack,
            ]}>
            {back}
          </Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.whitetitle}>{title}</Text>
        </View>
      </View>
    </>
  )
}

export default Header
