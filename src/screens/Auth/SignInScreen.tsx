import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../themes";
import AuthScaffold from "../../components/AuthFlowComponents/AuthScaffold";
import InputFields from "../../components/AuthFlowComponents/SignInScreenComponents/InputFields";

const SignInScreen = () => {
  return (
    <AuthScaffold>
      <InputFields />
    </AuthScaffold>
  );
};

export default { component: SignInScreen, name: "SignInScreen" };

const styles = StyleSheet.create({});
