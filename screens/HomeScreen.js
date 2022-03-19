import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-elements";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Header />
      <StatusBar style="light" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
