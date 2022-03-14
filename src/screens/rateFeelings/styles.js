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
    paddingHorizontal: metrics.doublePixel,
    marginBottom: metrics.doublePixel,
  },
  labelHearOutlinedtDefault: {
    textAlign: 'center',
    fontSize: metrics.pixel + 5,
    color: colors.black,
    fontWeight: '500',
    opacity: 0.5,
    paddingHorizontal: metrics.doublePixel + 4,
  },
  labelHeartOutlined: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.black,
    opacity: 0.5,
    fontWeight: '500',
  },
  labelHeartSlightly: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primaryDark,
    opacity: 0.6,
    fontWeight: 'bold',
  },
  labelHeartLittle: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primaryDark,
    opacity: 0.7,
    fontWeight: 'bold',
  },
  labelHeartFairly: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primaryDark,
    opacity: 0.8,
    fontWeight: 'bold',
  },
  labelHeartVery: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primaryDark,
    opacity: 0.9,
    fontWeight: 'bold',
  },
  labelHeartExtremely: {
    textAlign: 'center',
    fontSize: metrics.doublePixel,
    color: colors.primaryDark,
    opacity: 1,
    fontWeight: 'bold',
  },
  heartImageOutlined: {
    marginTop: metrics.pixel,
    width: metrics.triplePixel + 4,
    alignSelf: 'center',
    height: metrics.triplePixel + 4,
    resizeMode: 'contain',
  },
  heartImageSlightly: {
    marginTop: metrics.pixel,
    width: metrics.fourFoldPixel,
    alignSelf: 'center',
    height: metrics.fourFoldPixel,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartImageLittle: {
    marginTop: 50,
    width: metrics.fourFoldPixel + 5,
    alignSelf: 'center',
    height: metrics.fourFoldPixel + 5,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartImageFairly: {
    marginTop: 50,
    width: metrics.fiveFoldPixel,
    alignSelf: 'center',
    height: metrics.fiveFoldPixel,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartImageVery: {
    marginTop: 50,
    width: metrics.fiveFoldPixel + 5,
    alignSelf: 'center',
    height: metrics.fiveFoldPixel + 5,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartImageExtremely: {
    marginTop: 50,
    width: metrics.fiveFoldPixel + 10,
    alignSelf: 'center',
    height: metrics.fiveFoldPixel + 10,
    resizeMode: 'contain',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default styles
