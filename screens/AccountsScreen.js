import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { auth, db, firebase } from "../firebase";
import { Avatar, Text } from "react-native-elements";
import EachOrders from "../components/EachOrders";

const AccountsScreen = (props) => {
  const [userDB, setUserDB] = useState("");
  const [uName, setUName] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [uMobile, setUMobile] = useState("");
  const [uAddress, setUAddress] = useState("");

  const [user, setUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        setUser(u);

        db.collection("users")
          .doc(u.uid)
          .onSnapshot((doc) => {
            setUMobile(doc.data().mobile);
            setUAddress(doc.data().address);
            setUName(doc.data().name);
            setUEmail(doc.data().email);
            setUserDB({ id: doc.id, ...doc.data() });
          });
      }
    });
  }, [user]);

  const onUpdateProfile = () => {
    db.collection("users").doc(user.uid).set(
      {
        name: uName,
        email: uEmail,
        mobile: uMobile,
        address: uAddress,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    alert("Updated Successfully");
  };

  return (
    <ScrollView>
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
          value={uName}
          onChangeText={(text) => {
            setUName(text);
          }}
          placeholder="Not Mentioned"
          style={styles.nameBox}
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          value={uEmail}
          onChangeText={(text) => {
            setUEmail(text);
          }}
          placeholder="Not Mentioned"
          style={styles.nameBox}
        />
        <Text style={styles.title}>Mobile</Text>
        <TextInput
          value={uMobile}
          onChangeText={(text) => {
            setUMobile(text);
          }}
          placeholder="Not Mentioned"
          style={styles.nameBox}
        />
        <Text style={styles.title}>Address</Text>
        <TextInput
          value={uAddress}
          onChangeText={(text) => {
            setUAddress(text);
          }}
          placeholder="Not Mentioned"
          style={[styles.nameBox, { height: 90 }]}
        />
        <Pressable style={styles.button} onPress={onUpdateProfile}>
          <Text style={styles.btnText}>Update Profile</Text>
        </Pressable>
      </View>
      <View style={styles.line}></View>
      <View style={styles.yourOrdersContainer}>
        <Text h3 style={{ textAlign: "center" }}>
          Your Orders
        </Text>
        {userDB ? (
          userDB.orders ? (
            userDB.orders.map((order) => (
              <EachOrders
                key={order.id}
                name={order.name}
                quantity={order.quantity}
                rating={order.rating}
                description={order.description}
                price={order.price}
                pic={order.pic}
                orderDate={order.orderDate}
                PaymentMode={order.PaymentMode}
                DeliveryDate={order.DeliveryDate}
                status={order.status}
              />
            ))
          ) : (
            <Text
              style={{ color: "red", textAlign: "center", marginTop: 10 }}
              h4
            >
              No Orders
            </Text>
          )
        ) : (
          <ActivityIndicator size="small" color="#fff" />
        )}
      </View>
    </ScrollView>
  );
};

export default AccountsScreen;

const styles = StyleSheet.create({
  yourSellItemsContainer: {
    display: "flex",
    margin: 12,
  },
  line: {
    borderWidth: 2,
    borderColor: "#1A4ADA",
    marginVertical: 25,
  },
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
    width: "72%",
    marginTop: 10,
  },
  nameBox: {
    marginVertical: 5,
    marginHorizontal: 15,
    padding: 10,
    width: 280,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  button: {
    marginTop: 14,
    backgroundColor: "#1A4ADA",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },
  btnText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
