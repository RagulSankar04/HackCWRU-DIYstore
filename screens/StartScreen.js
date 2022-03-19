import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { auth, firebase } from "../firebase";
import { Image } from "react-native-elements";
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
    <SafeAreaView>
      <Image
        ContainerStyle={{ width: 200, height: 200 }}
        source={require("../images/logo.png")}
      />
      <Text>Starting Page</Text>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default StartScrren;

const styles = StyleSheet.create({});
