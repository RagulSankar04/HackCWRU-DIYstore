import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Avatar, Text } from "react-native-elements";

const Header = () => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <StatusBar style="dark" />
      <View style={styles.navbar}>
        <Avatar
          size={130}
          source={require("../images/logo.png")}
          style={styles.avatar}
          key={0}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#fff",
    borderBottomColor: "#000",
    width: "100%",
    height: 130,
  },
  navbar: { marginTop: 60, marginHorizontal: 20 },
  avatar: {
    width: 50,
    height: 50,
    borderWidth: 1.2,
    borderColor: "whitesmoke",
  },
});
