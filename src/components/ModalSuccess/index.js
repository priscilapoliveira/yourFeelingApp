import React from 'react'

import { Modal, View, Text, Image } from 'react-native'

import Button from '../Button'

import sucess from '../../assets/images/success.png'
import styles from './styles'

const ModalSuccess = ({ isVisible, onClosed, text, subText, onPress }) => {
  return (
    <>
      <Modal
        style={styles.screenContainer}
        visible={isVisible}
        backdrop={true}
        onClosed={onClosed}
        coverScreen={false}
        swipeToClose={false}>
        <View style={styles.container}>
          <View style={styles.imgSucess}>
            <Image source={sucess} style={styles.stretchLogo} />
          </View>

          <Text style={styles.headerText}>{text}</Text>
          <Text style={styles.subHeaderText}>{subText}</Text>

          <View style={styles.onClosed}>
            <Button primary text={'Go to home'} onPress={onPress} />
          </View>
        </View>
      </Modal>
    </>
  )
}

export default ModalSuccess
