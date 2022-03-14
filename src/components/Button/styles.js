import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    with: '90%',
    height: metrics.fiveFoldPixel * 3,
    padding: metrics.doublePixel,
    borderRadius: metrics.pixel,
    marginHorizontal: metrics.pixel,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  whiteButton: {
    backgroundColor: colors.white,
  },
  primaryTextButton: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primary,
    fontWeight: 'bold',
  },
  whiteTextButton: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.white,
    fontWeight: 'bold',
  },
})

export default styles
