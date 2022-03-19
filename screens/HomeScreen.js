import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { auth } from "../firebase";
const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        onPress={() => {
          auth.signOut();
        }}
        title="SignOut"
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
