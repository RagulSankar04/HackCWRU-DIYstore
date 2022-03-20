import {
  StyleSheet,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect } from "react";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import LoginContainer from "../components/LoginContainer";
import HomeContainer from "../components/HomeContainer";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StartScrren = ({ navigation }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });
  }, [navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={LoginContainer}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeContainer}
      />
    </Stack.Navigator>
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
