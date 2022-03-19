import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LogBox, StyleSheet, Text, View } from "react-native";
import StartScreen from "./screens/StartScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();
LogBox.ignoreAllLogs();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#521e85",
            },
            headerTintColor: "#fff",
            headerLeft: false,
          }}
          name="Start"
          component={StartScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#521e85",
            },
            headerTintColor: "#fff",
            headerLeft: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "#521e85",
            },
            headerTintColor: "#fff",
            headerLeft: false,
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
