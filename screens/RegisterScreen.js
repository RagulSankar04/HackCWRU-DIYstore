import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { auth, db, firebase } from "../firebase";
import { Text } from "react-native-elements";
import React, { useEffect, useState } from "react";
import * as EmailValidator from "email-validator";
const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPass, setCPass] = useState("");

  const [loaderState, setLoaderState] = useState(0);

  const onSignUp = () => {
    setLoaderState(1);
    if (!name || !email || !password || !cPass) {
      alert("There The Empty Field Boxes, Enter all the Fields to Proceeds");
      setLoaderState(0);
      return;
    } else {
      if (!EmailValidator.validate(email)) {
        alert("Please Enter a Valid Emaill Address");
        setLoaderState(0);
        return;
      } else {
        if (password !== cPass) {
          alert("The Passwords Dies Not Match");
          setLoaderState(0);
          return;
        } else {
          auth
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
              db.collection("users").doc(userCredential.user.uid).set(
                {
                  name: name,
                  email: email,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                },
                { merge: true }
              );
            })
            .catch((error) => {
              alert(error.message);
              setLoaderState(0);
            });
        }
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.signUpContainer}>
        <Text style={styles.mainTitle}>Register</Text>
        <TextInput
          onChangeText={(text) => setName(text)}
          style={styles.details}
          placeholder="Name"
          value={name}
        />
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.details}
          placeholder="Email"
          value={email}
        />
        <TextInput
          style={styles.details}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          value={password}
          secureTextEntry
          type="password"
        />
        <TextInput
          style={styles.details}
          onChangeText={(text) => setCPass(text)}
          placeholder="Confirm Password"
          type="password"
          secureTextEntry
          value={cPass}
        />
        <Pressable style={styles.register} onPress={onSignUp}>
          {!loaderState ? (
            <Text style={styles.btnText}>Sign Up</Text>
          ) : (
            <ActivityIndicator size="small" color="#fff" />
          )}
        </Pressable>
      </View>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
  signUpContainer: {
    backgroundColor: "#fff",
    width: 297,
    height: 500,
    borderRadius: 20,
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "black",
    shadowOpacity: 1.0,
    display: "flex",
    alignItems: "center",
    padding: 30,
  },
  details: {
    marginTop: 10,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  mainTitle: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "700",
    fontSize: 32,
    color: "#1A4ADA",
  },
  register: {
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
    color: "#fff",
  },
});
