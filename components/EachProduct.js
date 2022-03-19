import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Text } from "react-native-elements";

const EachProduct = (props) => {
  return (
    <View style={styles.container}>
      <View styele={styles.productImage}>
        {props.image ? (
          <Avatar size={130} source={{ uri: props.image }} key={0} />
        ) : (
          <Avatar
            size={130}
            rounded
            title="NA"
            containerStyle={{ backgroundColor: "grey", opacity: 0.5 }}
            key={1}
          />
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "left" }}>
          {props?.name}
        </Text>
        <Text style={{ fontSize: 12, textAlign: "left" }}>
          {props?.category}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", textAlign: "left" }}>
          Qty: {props?.quantity}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "left",
            marginTop: 15,
          }}
        >
          Rs {props?.price}
        </Text>
      </View>
    </View>
  );
};

export default EachProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 8,
    padding: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  productDetails: {
    marginHorizontal: 12,
  },
  productImage: {
    flex: 0.5,
  },
});
