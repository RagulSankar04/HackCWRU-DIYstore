import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator();
const HomeContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1A4ADA",
          },
          headerTintColor: "#fff",
        }}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#1A4ADA",
          },
          headerTintColor: "#fff",
        }}
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({});
