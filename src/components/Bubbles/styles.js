import { StyleSheet } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.doublePixel / 1.5,
    margin: metrics.doublePixel / 1.5,
  },
  baseBubble: {
    width: metrics.doublePixel,
    height: metrics.doublePixel,
    borderRadius: metrics.triplePixel * 2 + 4,
    padding: metrics.pixel * 2,
  },
  mediumBubble: {
    width: metrics.triplePixel,
    height: metrics.triplePixel * 3,
    borderRadius: metrics.triplePixel * 2 + 4,
    padding: metrics.pixel * 4,
  },
  largeBubble: {
    width: metrics.fourFoldPixel,
    height: metrics.fourFoldPixel,
    borderRadius: metrics.triplePixel * 2 + 4,
    padding: metrics.pixel * 6,
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
