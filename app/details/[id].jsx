import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Stack } from "expo-router";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import RestaurantInfoCard from "../../components/specifics/restaurant-info-card.component";
import { List } from "react-native-paper";

const RestaurantDetails = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerTintColor: "black",
    });
    navigation.getState();
  }, []);

  const restaurant = useLocalSearchParams();

  return (
    <>
      <View>
        <Stack.Screen
          options={{
            title: `${restaurant.id}`,
          }}
        />
        <RestaurantInfoCard restaurant={restaurant} />
        <ScrollView>
          <List.AccordionGroup>
            <List.Accordion
              title="Breakfast"
              id="1"
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
            >
              <List.Item title="Eggs Benedict" />
              <List.Item title="Classic Breakfast" />
            </List.Accordion>
            <List.Accordion
              title="Lunch"
              id="2"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
            >
              <List.Item title="Burger & Fries" />
              <List.Item title="Steak Sandwich" />
              <List.Item title="Mushroom Soup" />
            </List.Accordion>

            <List.Accordion
              title="Dinner"
              id="3"
              left={(props) => <List.Icon {...props} icon="food-variant" />}
            >
              <List.Item title="Spaghetti Bolognese" />
              <List.Item title="Veal Cutlet with Chicken Musk" />
              <List.Item title="Steak Frites" />
            </List.Accordion>

            <List.Accordion
              title="Drink"
              id="4"
              left={(props) => <List.Icon {...props} icon="cup" />}
            >
              <List.Item title="Coffee" />
              <List.Item title="Tea" />
              <List.Item title="Modelo" />
              <List.Item title="Coke" />
              <List.Item title="Fanta" />
            </List.Accordion>
          </List.AccordionGroup>
        </ScrollView>
      </View>
    </>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});
