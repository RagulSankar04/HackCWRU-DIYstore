import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const BottomTabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.btnGroups}>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>H</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>S</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>C</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>U</Text>
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
    backgroundColor: "#714F93",
    borderRadius: 45,
    height: 40,
    width: 40,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
