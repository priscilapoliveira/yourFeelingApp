import { StyleSheet, Dimensions } from "react-native";
import { metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: metrics.doublePixel,
  },
});

export default styles;
