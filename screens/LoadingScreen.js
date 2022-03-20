import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, db, firebase } from "../firebase";
import { StatusBar } from "expo-status-bar";

const LoadingScreen = ({ navigation }) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .set(
          {
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          },
          { merge: true }
        )
        .then(() => navigation.navigate("Home"))
        .catch(alert);
    } else {
      navigation.navigate("Login");
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../images/logo.png")}
      />
      <ActivityIndicator size="large" color="#1A4ADA" />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});
