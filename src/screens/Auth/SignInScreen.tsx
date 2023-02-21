import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";

const SignInScreen = () => {
  return (
    <View style={globalStyles.centerRoot}>
      <Text>SignInScreen</Text>
    </View>
  );
};

export default { component: SignInScreen, name: "SignInScreen" };

const styles = StyleSheet.create({});
