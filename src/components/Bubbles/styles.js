import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
  },
  smallBubble: {
    width: metrics.triplePixel,
    height: metrics.triplePixel,
    padding: metrics.triplePixel,
    margin: metrics.triplePixel,
  },
  largeBubble: {
    width: metrics.fourFoldPixel,
    height: metrics.fourFoldPixel,
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
