import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { auth, firebase } from "../firebase";

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
      <Text>StartScrren</Text>
    </SafeAreaView>
  );
};

export default StartScrren;

const styles = StyleSheet.create({});
