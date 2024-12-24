import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useContext, useState } from "react";

import { styles } from "./search.component.style";
import { Searchbar, useTheme } from "react-native-paper";
import { LocationContext } from "../../services/locations/location.context";

const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
  const theme = useTheme();
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <View style={styles.search}>
      <Searchbar
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        style={styles.searchBar}
        placeholderTextColor={theme.colors.primary}
        iconColor={theme.colors.primary}
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
    </View>
  );
};

export default Search;
