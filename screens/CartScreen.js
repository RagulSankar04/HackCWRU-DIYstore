import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import EachProduct from "../components/EachProduct";
import { StatusBar } from "expo-status-bar";

const CartScreen = () => {
  const data = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1647546789972-71b9df1dfc8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60",
      name: "Mobile Holder",
      category: "Technology",
      quantity: 4,
      price: 255,
    },
    {
      id: 2,
      image: "",
      name: "Mouse pad",
      category: "Technology",
      quantity: 3,
      price: 150,
    },
    {
      id: 3,
      image: "",
      name: "Monitor",
      category: "Technology",
      quantity: 2,
      price: 15000,
    },
    {
      id: 4,
      image: "",
      name: "Monitor",
      category: "Technology",
      quantity: 2,
      price: 15000,
    },
  ];

  return (
    <ScrollView>
      {data.map((item) => (
        <EachProduct
          key={item.id}
          image={item.image}
          name={item.name}
          category={item.category}
          quantity={item.quantity}
          price={item.price}
        />
      ))}
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
