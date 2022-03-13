import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'

import Header from '../../components/Header'
import Bubbles from '../../components/Bubbles'

import styles from './styles'

const Home = () => {
  const navigation = useNavigation()
  const [dataFeelings, setDataFeelings] = useState([])

  useEffect(() => {
    api
      .get()
      .then((res) => {
        var body = res.data

        setDataFeelings(body.feelings)
      })
      .catch((error) => console.log(error))
  }, [setDataFeelings])

  return (
    <>
      <Header title={'How are you feeling?'} />

      <ScrollView style={styles.content}>
        <View style={styles.container}>
          {dataFeelings && dataFeelings.length ? (
            dataFeelings.map((feeling) => {
              return (
                <Bubbles
                  onPress={() =>
                    navigation.navigate('RateFeellings', {
                      emoji: feeling.emoji,
                      text: feeling.text,
                    })
                  }
                  emoji={feeling.emoji}
                  description={feeling.text}
                />
              )
            })
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
    </>
  )
}
export default Home
