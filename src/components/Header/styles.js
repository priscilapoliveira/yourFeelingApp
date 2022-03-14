import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: metrics.fiveFoldPixel + 15,
    paddingBottom: metrics.pixel + 4,
  },
  whitetitle: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.white,
    fontWeight: 'bold',
  },
  buttonContainer: {
    paddingHorizontal: metrics.doublePixel + 4,
  },
  textContainer: {
    paddingHorizontal: metrics.fiveFoldPixel + metrics.pixel,
  },

  backBlack: {
    textAlign: 'center',
    fontSize: metrics.pixel + 4,
    color: colors.black,
    fontWeight: 'bold',
  },
  backWhite: {
    textAlign: 'center',
    fontSize: metrics.pixel + 4,
    color: colors.white,
    fontWeight: 'bold',
  },
  primaryColor: {
    backgroundColor: colors.primary,
  },
  whiteColor: {
    backgroundColor: colors.white,
  },
})

export default styles
