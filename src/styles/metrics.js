import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const metrics = {
  // 8pt grid
  pixel: 8,
  doublePixel: 16,
  triplePixel: 24,
  fourFoldPixel: 32,
  fiveFoldPixel: 40,
};

export default metrics;
