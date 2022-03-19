import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native-elements";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      }
    });
  }, [user]);

  return (
    <View>
      {user ? (
        <Header
          displayName={user.displayName || ""}
          photoURL={user.photoURL || ""}
        />
      ) : (
        <Text>Loading...</Text>
      )}

      <View style={{ height: "78%" }}></View>

      <BottomTabs style={styles.bottomTabs} />

      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bottomTabs: {
    display: "flex",
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
