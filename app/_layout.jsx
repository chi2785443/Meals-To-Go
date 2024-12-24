import { Slot, Stack } from "expo-router";
import * as React from "react";
import { useState, useContext } from "react";
import { AppRegistry, View, Text } from "react-native";
import { PaperProvider } from "react-native-paper";
// import { name as appName } from "../app.json";

import Index from "./(tabs)/index";
import { RestaurantsContextProvider } from "../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../services/locations/location.context";
import { FavouritesContextProvider } from "../services/favourities/favourites.context";
import {
  AuthenticationContext,
  AuthenticationContextProvider,
} from "../services/authentication/authentication.context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import LoginPage from "./login";

import { initializeApp } from "firebase/app";

//manual import
import { darkTheme, lightTheme } from "../constants/reactnative-paper-theme";
import { useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCxbLQQwUW-bc5Ne3MxZGkokMj3S9xQEa4",
  authDomain: "mealstogo-61623.firebaseapp.com",
  projectId: "mealstogo-61623",
  storageBucket: "mealstogo-61623.firebasestorage.app",
  messagingSenderId: "571447144982",
  appId: "1:571447144982:web:f50c54a2a6efcc61e0bb37",
  measurementId: "G-H5V6FX5CLV",
};

export const app = initializeApp(firebaseConfig);

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

export default function RootLayout() {
  //const { isAuthenticated } = useContext(AuthenticationContext);
  const isAuthenticated = true;

  return (
    <PaperProvider theme={lightTheme}>
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Stack>
                <Stack.Screen
                  name="index"
                  options={{
                    headerShown: false,
                    // title: "home",
                  }}
                />
                <Stack.Screen
                  name="(tabs)"
                  options={{
                    headerShown: false,
                    title: "home",
                  }}
                />
                <Stack.Screen
                  name="login"
                  options={{
                    headerShown: false,
                    title: "login",
                  }}
                />
                <Stack.Screen
                  name="register"
                  options={{
                    headerShown: false,
                    title: "register",
                  }}
                />
                <Stack.Screen
                  name="favourites"
                  options={{
                    headerShown: true,
                    title: "favourites",
                  }}
                />
              </Stack>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent("meals-to-go", () => RootLayout);

// {isAuthenticated ? (
//   <Stack>
//     <Index />
//     <Stack.Screen
//       name="(tabs)"
//       options={{
//         headerShown: false,
//         title: "home",
//       }}
//     />
//   </Stack>
// ) : (
//   <View>
//     <Text>Your not login</Text>
//   </View>
// )}
