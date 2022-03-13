import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const Header = ({ title, primary, white }) => {
  const stylesHeader = [styles.container]
  var white
  var primary

  return (
    <>
      <View
        style={[
          styles.container,
          primary ? styles.primaryColor : styles.whiteColor,
        ]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </>
  )
}

export default Header
