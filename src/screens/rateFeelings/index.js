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
  const [feelingText, setFeelingText] = useState('')

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
          <Text style={styles.feelingText}>
            {feelingText}
            {paramsFeelings.text}
          </Text>
          <Text style={styles.subTitle}>
            Choose the intensity of yout feeling
          </Text>
        </View>
        <View style={styles.contentRate}>
          {rate >= 0 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(0), setFeelingText(Slightly)
              }}>
              <Text style={styles.labelHeartSlightly}>0%</Text>
              <Image source={heart} style={styles.heartImageSlightly} />
              <Text style={styles.labelHeartSlightly}>Slightly</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(1)
              }}>
              <Text style={styles.labelHearOutlinedtDefault}>0</Text>
              <Image source={heartOutlined} style={styles.heartImageOutlined} />
              <Text style={styles.labelHeartOutlined}>Slightly</Text>
            </TouchableOpacity>
          )}

          {rate >= 1 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(1), setFeelingText(A + little)
              }}>
              <Text style={styles.labelHeartLittle}>25%</Text>
              <Image source={heart} style={styles.heartImageLittle} />
              <Text style={styles.labelHeartLittle}>A little</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.labelHearOutlinedtDefault}>25</Text>
              <Image source={heartOutlined} style={styles.heartImageOutlined} />
              <Text style={styles.labelHeartOutlined}>A little</Text>
            </TouchableOpacity>
          )}

          {rate >= 2 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(2), setFeelingText(Fairly)
              }}>
              <Text style={styles.labelHeartFairly}>50%</Text>
              <Image source={heart} style={styles.heartImageFairly} />
              <Text style={styles.labelHeartFairly}>Fairly</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(3)
              }}>
              <Text style={styles.labelHearOutlinedtDefault}>50</Text>
              <Image source={heartOutlined} style={styles.heartImageOutlined} />
              <Text style={styles.labelHeartOutlined}>Fairly</Text>
            </TouchableOpacity>
          )}

          {rate >= 3 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(3), setFeelingText(Very)
              }}>
              <Text style={styles.labelHeartVery}>75%</Text>
              <Image source={heart} style={styles.heartImageVery} />
              <Text style={styles.labelHeartVery}>Very</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(3)
              }}>
              <Text style={styles.labelHearOutlinedtDefault}>75</Text>
              <Image source={heartOutlined} style={styles.heartImageOutlined} />
              <Text style={styles.labelHeartOutlined}>Very</Text>
            </TouchableOpacity>
          )}
          {rate >= 4 ? (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(4), setFeelingText(Extremely)
              }}>
              <Text style={styles.labelHeartExtremely}>100%</Text>
              <Image source={heart} style={styles.heartImageExtremely} />
              <Text style={styles.labelHeartExtremely}>Extremely</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                if (showButton) setRate(4)
              }}>
              <Text style={styles.labelHearOutlinedtDefault}>100</Text>
              <Image source={heartOutlined} style={styles.heartImageOutlined} />
              <Text style={styles.labelHeartOutlined}>Extremely</Text>
            </TouchableOpacity>
          )}
        </View>
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
      </LinearGradient>
    </>
  )
}

export default RateFeelings
