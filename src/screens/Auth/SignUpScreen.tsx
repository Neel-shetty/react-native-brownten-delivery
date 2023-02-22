import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";
import AuthScaffold from "../../components/AuthFlowComponents/AuthScaffold";
import InputFields from "../../components/AuthFlowComponents/SignUpScreenComponents/InputFields";

const SignUpScreen = () => {
  return (
    <AuthScaffold>
      <InputFields />
    </AuthScaffold>
  );
};

export default { component: SignUpScreen, name: "SignUpScreen" };

const styles = StyleSheet.create({});
