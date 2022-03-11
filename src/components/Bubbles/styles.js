import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    marginHorizontal: 1.7,
    marginVertical: 1.5,
    borderRadius: 150,
    shadowRadius: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  smallBubble: {
    width: metrics.triplePixel * 3,
    height: metrics.triplePixel * 3,
    padding: metrics.pixel * 2,
  },
  mediumBubble: {
    width: metrics.fourFoldPixel * 3,
    height: metrics.fourFoldPixel * 3,
    padding: metrics.pixel * 3,
  },
  largeBubble: {
    width: metrics.fiveFoldPixel * 3,
    height: metrics.fiveFoldPixel * 3,
    padding: metrics.pixel * 4,
  },
  text: {
    fontSize: metrics.doublePixel,
    textAlign: 'center',
    color: colors.white,
    fontWeight: '500',
  },
})

export default styles
