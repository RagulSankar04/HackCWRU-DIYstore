import { StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import React from "react";

const EachOrders = (props) => {
  return (
    <View style={styles.container}>
      <Text
        h4
        style={{
          backgroundColor: "whitesmoke",
          textAlign: "center",
          padding: 4,
          borderRadius: 12,
        }}
      >
        {props.status}
      </Text>
      <Avatar
        source={{ uri: props.pic }}
        size={160}
        containerStyle={{ margin: 50 }}
      />
      <View style={styles.details}>
        <Text>
          <Text h3>{props.name}</Text> x <Text h5>{props.quantity}</Text>
        </Text>
        <Text style={{ textAlign: "center", maxHeight: 50, wrap: "word-wrap" }}>
          {props.description}
        </Text>
        <Text>
          {"\n\n\n"}
          <Text h5 style={{ fontWeight: "bold" }}>
            Order Date:{" "}
            <Text>
              {props.orderDate
                .toDate()
                .toString()
                .split(" ")
                .splice(1, 3)
                .join(" ")}
            </Text>
          </Text>
          {"\n\n"}
          <Text h5 style={{ fontWeight: "bold" }}>
            Payment Mode: <Text>{props.PaymentMode}</Text>
          </Text>
          {"\n\n"}
          <Text h5 style={{ fontWeight: "bold" }}>
            Expected Delivery Date:{" "}
            <Text>
              {props.DeliveryDate.toDate()
                .toString()
                .split(" ")
                .splice(1, 3)
                .join(" ")}
            </Text>
          </Text>
          {"\n\n"}
        </Text>
        <View
          style={{
            backgroundColor: "whitesmoke",
            padding: 20,
            borderRadius: 15,
          }}
        >
          <Text>Rs. {props.price * props.quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default EachOrders;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 15,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  details: {
    display: "flex",
    margin: 10,
    alignItems: "center",
  },
});
