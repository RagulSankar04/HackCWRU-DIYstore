import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Avatar } from "react-native-elements";

const AccountsScreen = (props) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);
      }
    });
  }, [user]);

  return (
    <View>
      <View style={styles.avatarContainer}>
        {user.photoURL ? (
          <Avatar
            size={110}
            containerStyle={styles.avatar}
            source={{ uri: user.photoURL }}
            rounded
          />
        ) : (
          <Avatar
            size={110}
            title={user.displayName ? user.displayName[0] : "NaN"}
            containerStyle={[styles.avatar, { backgroundColor: "grey" }]}
            rounded
          />
        )}
      </View>
      <View style={styles.userName}>
        <Text style={styles.title}>Name</Text>
        <TextInput
          placeholder="Name"
          value={user?.displayName}
          style={styles.nameBox}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput placeholder="Email" style={styles.nameBox} />
        <Text style={styles.title}>Contact Number</Text>
        <TextInput placeholder="Contact Number" style={styles.nameBox} />
        <Text style={styles.title}>Address</Text>
        <TextInput placeholder="Address" style={styles.nameBox} />
      </View>
    </View>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 22,
  },
  avatar: {
    borderWidth: 2.5,
    borderColor: "#1A4ADA",
    padding: 5,
    borderStyle: "dotted",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#1A4ADA",
    textAlign: "left",
  },
  nameBox: {
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 10,
    width: 280,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
});
