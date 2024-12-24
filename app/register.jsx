import React, { useState, useContext } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native";
import {
  useTheme,
  Button,
  TextInput,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { AuthenticationContext } from "../services/authentication/authentication.context";

const RegisterPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repeatPassword, setRepeatpassword] = React.useState("");

  const { user, isLoading, error, isAuthenticated, onRegister } = useContext(
    AuthenticationContext
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.bgImage}
        source={require("../assets/home-bg.jpg")}
        resizeMode="cover"
      >
        <View style={styles.accountCover}>
          <View style={styles.accountContainer}>
            <Text style={styles.title}>Meals To Go</Text>
            <TextInput
              label="Email"
              style={styles.emailInput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              label="Password"
              style={styles.passwordInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              label="Repeat Password"
              style={styles.passwordInput}
              value={repeatPassword}
              onChangeText={(text) => setRepeatpassword(text)}
            />
            {!isLoading ? (
              <Button
                style={styles.authButton}
                icon="lock-open-outline"
                mode="contained"
                onPress={() => {
                  onRegister(email, password, repeatPassword);
                  if (isAuthenticated) {
                    router.replace("/(tabs)/");
                  }
                }}
              >
                Register
              </Button>
            ) : (
              <ActivityIndicator animating={true} />
            )}
            <Button
              style={styles.authButton}
              mode="contained"
              onPress={() => router.replace("/")}
            >
              Back
            </Button>
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default RegisterPage;

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  accountCover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(225, 225, 225, 0.3)",
    justifyContent: "center",
  },
  title: {
    fontSize: "20",
    fontWeight: "600",
    justifyContent: "center",
  },
  accountContainer: {
    backgroundColor: "rgba(225, 225, 225, 0.7)",
    padding: "40",
    margin: "30",
  },
  emailInput: {
    marginTop: "10",
  },
  passwordInput: {
    marginTop: "10",
  },
  authButton: {
    color: "rgb(0, 104, 116)",
    backgroundColor: "rgb(0, 104, 116)",
    marginTop: "10",
    padding: "5",
  },
  errorContainer: {
    maxWidth: "300",
    marginTop: "10",
    color: "red",
  },
  errorText: {
    color: "red",
    paddingLeft: "5",
  },
});
