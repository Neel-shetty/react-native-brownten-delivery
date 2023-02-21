import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";

const SignUpScreen = () => {
  return (
    <View style={globalStyles.centerRoot}>
      <Text>SignUpScreen</Text>
    </View>
  );
};

export default { component: SignUpScreen, name: "SignUpScreen" };

const styles = StyleSheet.create({});
