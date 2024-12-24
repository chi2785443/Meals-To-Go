import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useContext, useState } from "react";

import { styles } from "./search.component.style";
import { Searchbar, useTheme } from "react-native-paper";
import { LocationContext } from "../../services/locations/location.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

const Search = () => {
  const theme = useTheme();
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);


  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <Searchbar
      style={styles.searchBar}
      placeholderTextColor={theme.colors.primary}
      iconColor={theme.colors.primary}
      icon="map"
      elevation={3}
      placeholder="Search for a location?"
      value={searchKeyword}
      onSubmitEditing={() => {
        search(searchKeyword);
      }}
      onChangeText={(text) => {
        setSearchKeyword(text);
      }}
    />
  );
};

export default Search;
