import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/app/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={HomeScreen.name}
    >
      <Drawer.Screen name={HomeScreen.name} component={HomeScreen.component} />
    </Drawer.Navigator>
  );
};

export default { name: "DrawerNavigator", component: DrawerNavigator };

const styles = StyleSheet.create({});
