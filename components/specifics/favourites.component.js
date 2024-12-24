import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";

import { FavouritesContext } from "../../services/favourities/favourites.context";

const Favourites = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);

  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      style={styles.favouritesButton}
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  favouritesButton: {
    position: "absolute",
    top: 25,
    right: 25,
    zIndex: 9,
  },
});
