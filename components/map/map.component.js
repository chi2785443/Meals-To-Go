import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MapView from "react-native-maps";
import CompactRestaurantInfo from "../map/CompactRestaurantInfo.component";

const MapComponemt = ({ restaurant }) => {
  return <CompactRestaurantInfo isMap={true} restaurant={restaurant} />;
};

export default MapComponemt;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
