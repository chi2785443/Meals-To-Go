import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  FlatList,
} from "react-native";
import { Card, TextInput, Searchbar } from "react-native-paper";
import { Stack } from "expo-router";
import { useTheme, ActivityIndicator } from "react-native-paper";
import { useContext, useState } from "react";

// manual imports
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../services/favourities/favourites.context";
import { styles } from "../../styles/home.style";
import RestaurantInfoCard from "../../components/specifics/restaurant-info-card.component";
import Search from "../../components/specifics//search.component";
import FavouritesBar from "../../components/specifics/favourites-bar.component";
import { router } from "expo-router";
import { FadeInView } from "../../components/animations/fade.animation";

export default function Index() {
  const theme = useTheme();
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  console.log(favourites);

  return isLoading ? (
    <View style={{ position: "absolute", top: "50%", left: "50%" }}>
      <ActivityIndicator
        style={{ marginLeft: "-25%" }}
        animating={true}
        size={50}
        color="red"
      />
    </View>
  ) : (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onDetail={() => router.push(`/details/${item.name}`)}
        />
      )}
      <View style={styles.list}>
        <FadeInView>
          <FlatList
            data={restaurants}
            renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 14 }}
          />
        </FadeInView>
      </View>
    </SafeAreaView>
  );
}
