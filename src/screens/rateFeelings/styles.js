import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'
const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingHorizontal: metrics.pixel,
  },
  content: {
    flexWrap: 'wrap',
    marginBottom: metrics.doublePixel,
  },
  feelingEmoji: {
    fontSize: metrics.fiveFoldPixel + 20,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: metrics.fourFoldPixel,
    color: colors.black,
    fontWeight: 'bold',
  },
  feelingText: {
    textAlign: 'center',
    fontSize: metrics.fourFoldPixel,
    color: colors.primaryDark,
    fontWeight: 'bold',
  },
})

export default styles
