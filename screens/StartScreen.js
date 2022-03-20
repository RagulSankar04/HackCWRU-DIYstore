import { StyleSheet } from "react-native";
import React from "react";

import LoginContainer from "../components/LoginContainer";
import HomeContainer from "../components/HomeContainer";
import LoadingScreen from "./LoadingScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StartScrren = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Loader"
        component={LoadingScreen}
      />
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
