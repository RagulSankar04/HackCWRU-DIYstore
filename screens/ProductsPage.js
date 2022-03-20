import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import EachProduct1 from "../components/EachProduct1";

const ProductsPage = ({ navigation }) => {
  const [productsDB, setProductDB] = useState([]);

  useEffect(() => {
    db.collection("Products").onSnapshot((snapShot) => {
      snapShot.docs.map((doc) => {
        const dbdata = { id: doc.id, ...doc.data() };
        setProductDB([...productsDB, dbdata]);
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <TextInput style={styles.seach__bar} placeHolder="Search" />
        <Image
          source={require("../images/SearchIcon.png")}
          style={styles.searchicon}
        />
        <Image
          source={require("../images/FilterIcon.png")}
          style={styles.filtericon}
        />
      </View>
      <View style={styles.product}>
        {productsDB ? (
          productsDB.map(() => <EachProduct1 key={5} />)
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </View>
  );
};

export default ProductsPage;

const styles = StyleSheet.create({
  searchHeader: {
    display: "flex",
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
  },
  seach__bar: {
    backgroundColor: "whitesmoke",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    paddingLeft: 30,
  },
  searchicon: {
    width: 25,
    height: 25,
    position: "absolute",
    right: 65,
  },
  filtericon: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
  },
});
