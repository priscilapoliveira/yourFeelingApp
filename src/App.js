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

export default App
