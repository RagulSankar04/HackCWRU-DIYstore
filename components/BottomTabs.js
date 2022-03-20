import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const BottomTabs = (props) => {
  const [homePress, setHomePress] = useState(0);
  const [searchPress, setSearchPress] = useState(0);
  const [cartPress, setCartPress] = useState(0);
  const [exitPress, setExitPress] = useState(0);

  useEffect(() => {
    props.page === "Home" && setHomePress(1);
    props.page === "Search" && setSearchPress(1);
    props.page === "Cart" && setCartPress(1);
    props.page === "Bag" && setExitPress(1);
  }, [props.page]);

  return (
    <View style={styles.container}>
      <View style={styles.btnGroups}>
        <Pressable
          style={homePress ? styles.buttonHovered : styles.button}
          onPress={() => {
            props.navigation.navigate("Home2");
            setHomePress(1);
            setSearchPress(0);
            setCartPress(0);
            setExitPress(0);
          }}
        >
          <Image
            style={styles.btnText}
            source={
              homePress
                ? require("../images/HomeIcon-white.png")
                : require("../images/HomeIcon.png")
            }
          />
        </Pressable>
        <Pressable
          style={searchPress ? styles.buttonHovered : styles.button}
          onPress={() => {
            setHomePress(0);
            setSearchPress(1);
            setCartPress(0);
            setExitPress(0);
          }}
        >
          <Image
            style={styles.btnText}
            source={
              searchPress
                ? require("../images/SearchIcon-white.png")
                : require("../images/SearchIcon.png")
            }
          />
        </Pressable>
        <Pressable
          style={cartPress ? styles.buttonHovered : styles.button}
          onPress={() => {
            setHomePress(0);
            setSearchPress(0);
            setCartPress(1);
            setExitPress(0);
            props.navigation.navigate("Cart");
          }}
        >
          <Image
            style={styles.btnText}
            source={
              cartPress
                ? require("../images/CartIcon-white.png")
                : require("../images/CartIcon.png")
            }
          />
        </Pressable>
        <Pressable
          style={exitPress ? styles.buttonHovered : styles.button}
          onPress={() => {
            setHomePress(0);
            setSearchPress(0);
            setCartPress(0);
            setExitPress(1);
            auth
              .signOut()
              .then(() => {
                props.navigation.navigate("Loader");
              })
              .catch(alert);
          }}
        >
          <Image
            style={styles.btnText}
            source={
              exitPress
                ? require("../images/ExitIcon-white.png")
                : require("../images/ExitIcon.png")
            }
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
  buttonHovered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 45,
    height: 50,
    width: 50,
    backgroundColor: "#1A4ADA",
  },
  btnText: {
    height: 30,
    width: 30,
  },
});
