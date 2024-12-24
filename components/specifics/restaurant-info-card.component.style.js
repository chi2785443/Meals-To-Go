import { StyleSheet, Text, View, Platform } from "react-native";
import { SIZES, fontSizes } from "../../constants";

export const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
    backgroundColor: "white",
  },
  container: {
    padding: SIZES.xxSmall,
    backgroundColor: "white",
  },
  title: {
    fontSize: fontSizes.body,
    fontFamily: "Oswald_400Regular",
  },
  adress: {
    paddingBottom: SIZES.xSmall,
    fontSize: fontSizes.caption,
    fontFamily: "Inter_400Regular",
  },
  cover: {
    padding: SIZES.xSmall,
    marginLeft: SIZES.small,
    marginRight: SIZES.small,
    backgroundColor: "white",
  },
  ratingContainer: {
    paddingTop: SIZES.xxSmall,
    paddingBottom: SIZES.xxSmall,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ratingList: {
    flexDirection: "row",
  },
  isOpenContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
