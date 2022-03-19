import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-elements";
import { auth } from "../firebase";
const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Text h1>Home Screen</Text>
      <Button
        containerStyle={{ marginTop: 10, width: 300 }}
        onPress={() => {
          auth.signOut();
        }}
        title="SignOut"
      />
      <Button
        containerStyle={{ marginTop: 10, width: 300 }}
        onPress={() => {
          navigation.navigate("Cart");
        }}
        title="Move to Cart Scrren"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
