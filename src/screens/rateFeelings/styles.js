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
  contentRate: {
    height: metrics.fiveFoldPixel * 2,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.fourFoldPixel,
    marginBottom: metrics.doublePixel,
  },
  heartImage: {
    marginTop: 50,
    width: metrics.fiveFoldPixel,
    alignSelf: 'center',
    height: metrics.fiveFoldPixel,
    resizeMode: 'contain',
  },
})

export default styles
