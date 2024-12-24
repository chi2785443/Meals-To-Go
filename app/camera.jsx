import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";

import { useState } from "react";
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { AntDesign } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import { AuthenticationContext } from "../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const CameraPage = () => {
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState(null);
  const { user } = useContext(AuthenticationContext);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  const snap = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log(photo);
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CameraView
        style={styles.camera}
        facing={facing}
        ref={(ref) => setCameraRef(ref)}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name="sync" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              snap();
              router.back();
            }}
          >
            <View style={styles.snap}></View>
          </TouchableOpacity>
        </View>
      </CameraView>
    </SafeAreaView>
  );
};

export default CameraPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  snap: {
    backgroundColor: "white",
    borderRadius: "50%",
    width: "40",
    height: "40",
  },
});
