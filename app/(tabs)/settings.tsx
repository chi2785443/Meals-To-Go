import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import { router } from "expo-router";

export default function Tab() {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar.Icon size={140} icon="human" style={styles.avatar} />
        <Text>{"user.email"}</Text>
      </View>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => {
            router.push("/favourites/");
          }}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={() => onLogout}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  avatar: {
    backgroundColor: "#2182bd",
  },
  avatarContainer: {
    alignItems: "center",
    padding: 10,
  },
});
