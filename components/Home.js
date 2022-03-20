import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.homeContainer}>
        <Image
          style={styles.banner}
          source={require("../images/Banner.png")}
        ></Image>
        <View style={styles.categoryContainer}>
          <View style={styles.category1}>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#F0FFB2" },
              ]}

            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-1.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#B9FFF7" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-2.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#FF9292" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-3.png")}
              />
            </View>
          </View>
          <View style={styles.category2}>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#FFE587" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-4.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#A4DBFA" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-5.png")}
              />
            </View>
            <View
              style={[
                styles.categoryImageContainer,
                { backgroundColor: "#FFAFDA" },
              ]}
            >
              <Image
                style={styles.categoryImage}
                source={require("../images/Categories-6.png")}
              />
            </View>
          </View>
        </View>
        <Image 
        style={styles.sellBanner}
        source={require("../images/Banner2.png")}>
        </Image>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },

  homeContainer: {
    height: "76.5%",
    padding: 12,
    marginTop: 50,
  },
  banner: {
    backgroundColor: "#DAD7D0",
    borderRadius: 16,
    aspectRatio: 170 / 77,
  },
  categoryContainer: {
    display: "flex",
    margin: 5,
    marginTop: 15,
  },
  category1: {
    display: "flex",
    flexDirection: "row",
  },
  category2: {
    display: "flex",
    flexDirection: "row",
  },
  categoryImageContainer: {
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  categoryImage: {
    width: 68,
    height: 68,
  },
  sellBanner:{
    aspectRatio: 16/9,
    height:250,
  }
});
