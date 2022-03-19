import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect } from "react";
import { auth, firebase } from "../firebase";
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
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../images/logo.png")}
      />
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
