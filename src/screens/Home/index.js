import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

import api from '../../services/api'

import Header from '../../components/Header'
import Bubbles from '../../components/Bubbles'

import styles from './styles'
import { useCallback } from 'react/cjs/react.development'

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    api
      .get()
      .then((response) => {
        const { data } = response.data

        setData(data)
      })
      .catch((error) => console.log(error))
  }, [setData])

  return (
    <>
      <Header />

      <ScrollView style={styles.content}>
        <View style={styles.container}>
          <Bubbles emoji={'😁'} description={'xxxxx'} />
          <Bubbles emoji={'😁'} description={'sadsas asd'} />
          <Bubbles emoji={'😁'} description={'xxx'} />
          <Bubbles emoji={'😁'} description={'sadsas asd'} />
          <Bubbles emoji={'😁'} description={'samuel'} />
          <Bubbles emoji={'😁'} description={'xxx'} />
          <Bubbles emoji={'😁'} description={'xxx'} />
          <Bubbles emoji={'😁'} description={'samuel'} />
          <Bubbles emoji={'😁'} description={'xxxxx'} />
          <Bubbles emoji={'😁'} description={'xxx'} />
          <Bubbles emoji={'😁'} description={'samuel'} />
          <Bubbles emoji={'😁'} description={'sadsas asd'} />
          <Bubbles emoji={'😁'} description={'samuel'} />
          <Bubbles emoji={'😁'} description={'xxx'} />
          <Bubbles emoji={'😁'} description={'sadsas asd'} />
        </View>
      </ScrollView>
    </>
  )
}

export default Home
