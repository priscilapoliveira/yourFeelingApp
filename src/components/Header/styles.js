import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.fiveFoldPixel + 10,
    paddingBottom: metrics.pixel + 4,
  },
  title: {
    fontSize: metrics.doublePixel + 3,
    textAlign: 'center',
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
