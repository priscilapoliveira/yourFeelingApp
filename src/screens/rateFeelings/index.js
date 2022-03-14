import React, { useEffect, useState, useCallback } from 'react'
import { View, Text } from 'react-native'

import { useRoute, useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Rating from '../../components/Rate'

import ModalSuccess from '../../components/ModalSuccess'

import styles from './styles'

const RateFeelings = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const [paramsFeelings, setParamsFeeling] = useState({})
  const [feelingText, setFeelingText] = useState('')
  const [closed, setClosed] = useState(false)
  const [visible, setViseble] = useState(false)
  const [rate, setRate] = useState(0)
  const VOTE1 = 1
  const VOTE2 = 2
  const VOTE3 = 3
  const VOTE4 = 4
  const VOTE5 = 5

  useEffect(() => {
    setParamsFeeling(route.params)
  }, [route, setParamsFeeling])

  const onReturneAndDisableModal = useCallback(() => {
    setViseble(false)
    setClosed(true)
    navigation.push('Home')
  }, [setViseble, setClosed, navigation])

  function mountText() {
    let feel = ''
    switch (rate) {
      case VOTE1:
        feel = 'Slinghtly'
        break
      case VOTE2:
        feel = 'A Little'
        break
      case VOTE3:
        feel = 'Fairly'
        break
      case VOTE4:
        feel = 'Very'
        break
      case VOTE5:
        feel = 'Extremely'
        break
    }
    return `${feel}`
  }
  return (
    <>
      <ModalSuccess
        isVisible={visible}
        onClosed={closed}
        text={'Save with success'}
        subText={'congratulation, you save your feelings today!'}
        onPress={() => onReturneAndDisableModal()}
      />

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
            {mountText()} {paramsFeelings.text}
          </Text>
          <Text style={styles.subTitle}>
            Choose the intensity of your feeling
          </Text>
        </View>
        <View style={styles.contentRate}>
          <Rating
            rate={rate}
            setRate={setRate}
            valueRate={1}
            text={'Slinghtly'}
            percent={0}
          />

          <Rating
            rate={rate}
            setRate={setRate}
            valueRate={2}
            text={'A Little'}
            percent={25}
          />

          <Rating
            rate={rate}
            setRate={setRate}
            valueRate={3}
            text={'Fairly'}
            percent={50}
          />

          <Rating
            rate={rate}
            setRate={setRate}
            valueRate={4}
            text={'Very'}
            percent={75}
          />

          <Rating
            rate={rate}
            setRate={setRate}
            valueRate={5}
            text={'Extremely'}
            percent={100}
          />
        </View>

        <Button
          primaryTextButton
          text={'Next'}
          onPress={() => {
            setViseble(true)
          }}
        />
      </LinearGradient>
    </>
  )
}

export default RateFeelings
