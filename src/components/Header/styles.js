import { StyleSheet } from 'react-native'
import { colors, metrics } from '../../styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingTop: metrics.fiveFoldPixel + 10,
    paddingBottom: metrics.pixel + 4,
  },
  title: {
    fontSize: metrics.doublePixel + 3,
    textAlign: 'center',
    color: colors.white,
    fontWeight: 'bold',
  },
})

export default styles
