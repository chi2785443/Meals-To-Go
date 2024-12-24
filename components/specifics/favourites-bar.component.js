import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

import CompactRestaurantInfo from "../map/CompactRestaurantInfo.component";
import MapComponemt from "../map/map.component";
import { router } from "expo-router";

const FavouritesBar = ({ favourites }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <View style={styles.favouritesWrapper}>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name.split("").join("");
          return (
            <View key={key} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => {
                  router.push(`/details/${restaurant.name}`);
                  router.setParams({ ...restaurant });
                }}
              >
                <CompactRestaurantInfo isMap={false} restaurant={restaurant} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavouritesBar;

const styles = StyleSheet.create({
  favouritesWrapper: {
    padding: 10,
  },
});
