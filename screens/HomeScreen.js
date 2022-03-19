import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native-elements";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import BottomTabs from "../components/BottomTabs";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      }
    });
  }, [user]);

  return (
    <View style={styles.container}>
      {user ? (
        <Header
          displayName={user.displayName || ""}
          photoURL={user.photoURL || ""}
        />
      ) : (
        <Text>Loading...</Text>
      )}

      <ScrollView style={styles.homeContainer}>
        <Image
          style={styles.banner}
          source={require("../images/Banner.png")}
        ></Image>

        <View style={styles.categoryContainer}>
          <View style={styles.category1}>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#F0FFB2" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-1.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#B9FFF7" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-2.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#FF9292" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-3.png")}
              />
            </View>
          </View>
          <View style={styles.category2}>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#FFE587" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-4.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#A4DBFA" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-5.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#FFAFDA" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-6.png")}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomTabs style={styles.bottomTabs} />

      <StatusBar style="dark" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  bottomTabs: {
    position: "relative",
    bottom: 0,
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
