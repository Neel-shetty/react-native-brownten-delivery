import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";


const OnBoardingScreen = () => {
  return (
    <View style={globalStyles.centerRoot}>
      <Text>OnBoaringScreen</Text>
    </View>
  );
};

export default { component: OnBoardingScreen, name: "OnBoardingScreen" };

const styles = StyleSheet.create({});
