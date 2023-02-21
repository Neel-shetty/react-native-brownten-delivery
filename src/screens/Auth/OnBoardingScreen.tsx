import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";
import SignInScreen from "./SignInScreen";

const OnBoardingScreen = ({ navigation }: any) => {
  return (
    <View style={globalStyles.centerRoot}>
      <Text
        onPress={() => {
          navigation.navigate(SignInScreen.name);
        }}
      >
        Go to Sign In
      </Text>
    </View>
  );
};

export default { component: OnBoardingScreen, name: "OnBoardingScreen" };

const styles = StyleSheet.create({});
