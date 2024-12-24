import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";

// manual imports
import { styles } from "./restaurant-info-card.component.style";
import { Card } from "react-native-paper";
import { icons } from "../../constants";
import checked from "../../assets/icons/checked.png";
import { router } from "expo-router";
import Favourites from "./favourites.component";
import { AntDesign } from "@expo/vector-icons";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <TouchableOpacity
      onPress={() => {
        if (router.canDismiss()) {
          router.dismiss();
          return;
        }
        router.push(`/details/${name}`);
        router.setParams({ ...restaurant });
      }}
    >
      <Card elevation={5} style={styles.card}>
        <Card.Cover
          style={styles.container}
          source={{
            uri: photos[0],
          }}
        />
        <Favourites restaurant={restaurant} />
        <View style={styles.cover}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.ratingList}>
              {ratingArray.map((item, index) => (
                <AntDesign
                  name="star"
                  style={{ width: 20, height: 20, color: "gold" }}
                  key={`star-${placeId}-${index}`}
                  size={20}
                />
                // <Image
                //   key={`star-${placeId}-${index}`}
                //   source={icons.heart}
                //   style={{ width: 20, height: 20 }}
                //   resizeMethod="contain"
                // />
              ))}
            </View>
            <View style={styles.isOpenContainer}>
              {isClosedTemporarily && (
                <Text style={{ color: "red", fontSize: 10 }}>
                  CLOSED TEMPORARILY
                </Text>
              )}
              {isOpenNow && (
                <Image
                  source={checked}
                  style={{ marginLeft: 5, width: 20, height: 20 }}
                />
              )}
              <Image
                source={{ uri: icon }}
                style={{ marginLeft: 5, width: 15, height: 15 }}
              />
            </View>
          </View>

          <Text style={styles.adress}>{address}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default RestaurantInfoCard;
