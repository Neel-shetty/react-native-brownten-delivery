import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const OnBoardingScreen = ({ navigation }: any) => {
  return (
    <View style={globalStyles.centerRoot}>
      <Text
        onPress={() => {
          navigation.navigate(SignUpScreen.name);
        }}
      >
        Go to Sign In
      </Text>
    </View>
  );
};

export default { component: OnBoardingScreen, name: "OnBoardingScreen" };

const styles = StyleSheet.create({});
