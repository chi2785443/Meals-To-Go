import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import Search from "../../components/map/search.component";
import MapComponemt from "../../components/map/map.component";
import { router } from "expo-router";

import { LocationContext } from "../../services/locations/location.context";
import { RestaurantsContext } from "../../services/restaurants/restaurants.context";

const map = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <View style={styles.container}>
      <Search />
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() => {
                  if (router.canDismiss()) {
                    router.dismiss();
                    return;
                  }
                  router.push(`/details/${restaurant.name}`);
                  router.setParams({ ...restaurant });
                }}
              >
                <MapComponemt restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
