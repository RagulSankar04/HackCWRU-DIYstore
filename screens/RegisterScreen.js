import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Pressable,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth, firebase } from "../firebase";
import { SocialIcon, Text } from "react-native-elements";
import React, { useEffect } from "react";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.signUpContainer}>
        <TextInput style={styles.details} placeholder="Name" />
        <TextInput style={styles.details} placeholder="Email" />
        <TextInput style={styles.details} placeholder="Name" />
        <TextInput style={styles.details} placeholder="Name" />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  signUpContainer: {
    width: 290,
    height: 450,
    borderWidth: 1,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "grey",
    shadowOpacity: 1.0,
    padding: 30,
  },
  details: {},
});
