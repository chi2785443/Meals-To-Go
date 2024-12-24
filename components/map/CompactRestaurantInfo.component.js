import { StyleSheet, Text, View, Image, Platform } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const isAndriod = Platform.OS === "android";
const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const image =
    isAndriod && isMap ? (
      <WebView style={styles.WebView} source={{ uri: restaurant.photos[0] }} />
    ) : (
      <Image style={styles.image} source={{ uri: restaurant.photos[0] }} />
    );
  return (
    <View style={styles.item}>
      {image}
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </View>
  );
};

export default CompactRestaurantInfo;

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
  item: {
    padding: 10,
    maxWidth: 120,
    alignItems: "center",
  },
  WebView: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
});
