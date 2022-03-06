/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import PublicRoutes from './routes/publicRoute'

import SplashScreen from 'react-native-splash-screen'

import { colors } from './styles/colors'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='transparent' />
      <PublicRoutes />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
    // backgroundColor: colors.white,
  },
})

export default App
