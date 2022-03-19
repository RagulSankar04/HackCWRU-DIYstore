import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Avatar } from "react-native-elements";

const Header = (props) => {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.navbar}>
        <Avatar size={50} source={require("../images/logo.png")} key={0} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            borderWidth: 2,
            borderColor: "grey",
            padding: 4,
            borderRadius: 12,
            paddingLeft: 8,
          }}
        >
          {props.displayName}
        </Text>
        {props.photoURL ? (
          <Avatar size={50} source={{ uri: props.photoURL }} rounded key={0} />
        ) : (
          <Avatar
            size={50}
            rounded
            containerStyle={{ backgroundColor: "grey" }}
            title={props.displayName[0]}
            key={0}
          />
        )}
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#fff",
    borderBottomColor: "#000",
    width: "100%",
    height: 110,
    zIndex: 100,
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 50,
    marginHorizontal: 20,
  },
  avatar: {
    borderWidth: 1.2,
    borderColor: "whitesmoke",
    backgroundColor: "whitesmoke",
  },
});
