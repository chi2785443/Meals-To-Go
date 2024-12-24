import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useContext } from "react";
import { FavouritesContext } from "../services/favourities/favourites.context";
import RestaurantInfoCard from "../components/specifics/restaurant-info-card.component";

const FavouritesPage = () => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <View style={styles.list}>
      <FlatList
        data={favourites}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 14 }}
      />
    </View>
  ) : (
    <View style={styles.noFavourites}>
      <Text>No Favourites yet..</Text>
    </View>
  );
};

export default FavouritesPage;

const styles = StyleSheet.create({
  noFavourites: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
