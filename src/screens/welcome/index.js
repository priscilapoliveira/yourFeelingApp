import React from 'react'

import { useNavigation } from '@react-navigation/native'

import { View, Text, Image } from 'react-native'

import Button from '../../components/Button'

import welcome from '../../assets/images/welcome.png'

import styles from './styles'

const Welcome = () => {
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.container}>
        <Image source={welcome} style={styles.image} />
        <Text style={styles.title}>Welcome, shall we begin?</Text>
        <Button
          onPress={navigation.navigate('Home')}
          primaryTextButton
          text={'Go'}
        />
      </View>
    </>
  )
}

export default Welcome
