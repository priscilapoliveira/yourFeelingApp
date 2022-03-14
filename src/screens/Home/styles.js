import { StyleSheet, Dimensions } from 'react-native'
import { metrics, colors } from '../../styles'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: colors.primary,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: metrics.pixel,
    paddingTop: metrics.triplePixel,
  },
  content: {
    backgroundColor: colors.primary,
  },
})

export default styles
