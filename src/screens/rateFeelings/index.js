import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../components/Header'
import Button from '../../components/Button'

import heart from '../../assets/images/heart.png'
import heartOutlined from '../../assets/images/heart-outlined.png'

import styles from './styles'

const RateFeelings = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const [paramsFeelings, setParamsFeeling] = useState({})
  const [showButton, setShowButton] = useState(false)
  const [rate, setRate] = useState(0)

  useEffect(() => {
    setParamsFeeling(route.params)
  }, [route, setParamsFeeling])

  return (
    <>
      <Header backBlack back={'<'} onPress={navigation.goBack} />

      <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={['#ffffff', '#9d8cea', '#8573d6', '#7C64E3']}
        style={styles.container}>
        <Text style={styles.feelingEmoji}>{paramsFeelings.emoji}</Text>
        <View style={styles.content}>
          <Text style={styles.title}>I'm feeling</Text>
          <Text style={styles.feelingText}>{paramsFeelings.text}</Text>
        </View>
        <View style={styles.contentRate}>
          {rate > 0 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(0)
              }}>
              <Image source={heart} style={styles.heartImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(1)
              }}>
              <Image source={heartOutlined} style={styles.heartImage} />
            </TouchableOpacity>
          )}

          {rate >= 1 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(1)
              }}>
              <Image source={heart} style={styles.heartImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(1)
              }}>
              <Image source={heartOutlined} style={styles.heartImage} />
            </TouchableOpacity>
          )}

          {rate >= 2 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(2)
              }}>
              <Image source={heart} style={styles.heartImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(2)
              }}>
              <Image source={heartOutlined} style={styles.heartImage} />
            </TouchableOpacity>
          )}

          {rate >= 3 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(3)
              }}>
              <Image source={heart} style={styles.heartImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(3)
              }}>
              <Image source={heartOutlined} style={styles.heartImage} />
            </TouchableOpacity>
          )}
          {rate >= 4 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(4)
              }}>
              <Image source={heart} style={styles.heartImage} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(4)
              }}>
              <Image source={heartOutlined} style={styles.heartImage} />
            </TouchableOpacity>
          )}
          {/* {showButton ? ( */}

          <Button
            primaryTextButton
            text={'Next'}
            onPress={() => {
              // avaliar();
            }}
          />

          {/* ) : (
            <></>
          )} */}
        </View>
      </LinearGradient>
    </>
  )
}

export default RateFeelings
