import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("../images/logo.png")}
      />
      <ActivityIndicator size="large" color="#1A4ADA" />
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({});
