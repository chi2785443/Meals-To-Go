// LoginPage.js
import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";
import { useTheme, Button } from "react-native-paper";
import LottieView from "lottie-react-native";
// import { useRef } from "react";

const LoginPage = () => {
  // const animation = useRef < LottieView > null;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/home-bg.jpg")}
        resizeMode="cover"
      >
        <View style={styles.accountCover}>
          <LottieView
            key="animation"
            autoPlay
            loop
            resizeMode="cover"
            source={require("../assets/watermelon.json")}
            // ref={animation}
            style={{
              position: "absolute",
              top: "30",
              width: "100%",
              height: "40%",
              padding: "10",
              // backgroundColor: "#eee",
            }}
          />
          <Text style={styles.title}>Meals To Go</Text>
          <View style={styles.accountContainer}>
            <Button
              style={styles.authButton}
              icon="lock-open-outline"
              mode="contained"
              onPress={() => router.replace("/login/")}
            >
              Login
            </Button>
            <Button
              style={styles.authButton}
              icon="lock-open-outline"
              mode="contained"
              onPress={() => router.replace("/register/")}
            >
              Register
            </Button>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },
  accountCover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(225, 225, 225, 0.3)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "20",
    fontWeight: "600",
  },
  accountContainer: {
    backgroundColor: "rgba(225, 225, 225, 0.7)",
    padding: "40",
    marginTop: "20",
  },
  authButton: {
    color: "rgb(0, 104, 116)",
    backgroundColor: "rgb(0, 104, 116)",
    marginTop: "5",
    padding: "5",
  },
});
