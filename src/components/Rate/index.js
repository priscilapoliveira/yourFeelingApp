import React, { useEffect, useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import heart from '../../assets/images/heart.png'
import heartOutlined from '../../assets/images/heart-outlined.png'

import styles from './styles'

const Rating = ({ rate, setRate, valueRate, text, percent }) => {
  function isRate(value) {
    return rate >= value
  }
  return (
    <>
      <View style={styles.contentRate}>
        <TouchableOpacity
          onPress={() => {
            setRate(valueRate)
          }}>
          <Text
            style={
              isRate(valueRate) ? styles.labelHeart : styles.labelHearOutlined
            }>
            {percent}%
          </Text>
          <Image
            source={isRate(valueRate) ? heart : heartOutlined}
            style={
              isRate(valueRate) ? styles.heartImage : styles.heartImageOutlined
            }
          />
          <Text
            style={
              isRate(valueRate) ? styles.labelHeart : styles.labelHearOutlined
            }>
            {text}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Rating
