import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: metrics.doublePixel + 4,
    margin: metrics.doublePixel + 4,
  },
  mediumBubble: {
    padding: metrics.triplePixel,
    margin: metrics.triplePixel,
  },
  largeBubble: {
    padding: metrics.triplePixel,
    margin: metrics.triplePixel,
  },
  emoji: {
    fontSize: metrics.pixel,
    padding: metrics.pixel / 2,
  },
  description: {
    color: colors.white,
    fontWeight: '500',
    fontSize: metrics.pixel,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
})

export default styles
