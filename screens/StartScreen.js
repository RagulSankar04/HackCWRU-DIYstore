import {
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";

const StartScrren = ({ navigation }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("Login");
      }
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../images/logo.png")}
      />
      <ActivityIndicator size="large" color="#1A4ADA" />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default StartScrren;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
