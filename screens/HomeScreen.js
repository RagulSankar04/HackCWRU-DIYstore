import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native-elements";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";
import Home from "../components/Home";
import { createStackNavigator } from "@react-navigation/stack";
import CartScreen from "./CartScreen";
import AccountsScreen from "./AccountsScreen";
import ProductsPage from "./ProductsPage";

const HomeScreen = ({ navigation }) => {
  navigation.canGoBack(false);

  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      } else {
        navigation.navigate("Login");
      }
    });
  }, [user]);
  const Stack = createStackNavigator();
  return (
    <>
      {user ? (
        <Header
          navigation={navigation}
          displayName={user.displayName || ""}
          photoURL={user.photoURL || ""}
        />
      ) : (
        <Text>Loading...</Text>
      )}

      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home2"
          component={Home}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={CartScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Account"
          component={AccountsScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Products"
          component={ProductsPage}
        />
      </Stack.Navigator>

      <BottomTabs navigation={navigation} page="Home" />

      <StatusBar style="dark" />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },

  homeContainer: {
    height: "76.5%",
    padding: 12,
    marginTop: 10,
  },
  banner: {
    backgroundColor: "#DAD7D0",
    borderRadius: 16,
    aspectRatio: 170 / 77,
  },
  categoryContainer: {
    display: "flex",
    margin: 5,
    marginTop: 15,
  },
  category1: {
    display: "flex",
    flexDirection: "row",
  },
  category2: {
    display: "flex",
    flexDirection: "row",
  },
  categoryImageContainer: {
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  categoryImage: {
    width: 68,
    height: 68,
  },
});
