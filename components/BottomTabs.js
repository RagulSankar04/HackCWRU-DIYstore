import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const BottomTabs = () => {
  const [homePress, setHomePress] = useState(0);
  const [searchPress, setSearchPress] = useState(0);
  const [cartPress, setCartPress] = useState(0);
  const [bagPress, setBagPress] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.btnGroups}>
        <Pressable style={styles.button}>
          <Image
            style={styles.btnText}
            source={require("../images/HomeIcon.png")}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Image
            style={styles.btnText}
            source={require("../images/SearchIcon.png")}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Image
            style={styles.btnText}
            source={require("../images/CartIcon.png")}
          />
        </Pressable>
        <Pressable style={styles.button}>
          <Image
            style={styles.btnText}
            source={require("../images/BagIcon.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: 75,
    zIndex: 100,
  },
  btnGroups: {
    justifyContent: "space-between",
    height: 100,
    display: "flex",
    flexDirection: "row",
    padding: 5,
    margin: 5,
    marginHorizontal: 30,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    height: 40,
    width: 40,
  },
  btnText: {
    height: 30,
    width: 30,
  },
});
