import { StyleSheet, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native-elements";
import EachProduct from "../components/EachProduct";
import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  const finalAmount = useState(0);

  const data = [];

  return (
    <View>
      <View style={styles.totalPaymentContainer}>
        <Text style={styles.totalPayment}>
          The Amount to be Paid is {finalAmount}
        </Text>
      </View>
      <ScrollView style={styles.cartContainer} bouncesZoom>
        {data.length ? (
          data.map((item) => (
            <EachProduct
              key={item.id}
              image={item.image}
              name={item.name}
              category={item.category}
              quantity={item.quantity}
              price={item.price}
            />
          ))
        ) : (
          <Text h3 style={styles.noRecord}>
            No Record Found
          </Text>
        )}

        <StatusBar style="dark" />
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  noRecord: {
    textAlign: "center",
    color: "red",
    marginTop: 120,
  },
  totalPaymentContainer: {
    backgroundColor: "#fff",
    margin: 14,
    marginHorizontal: 70,
    padding: 20,
    borderRadius: 20,
  },
  totalPayment: {
    textAlign: "center",
  },
});
