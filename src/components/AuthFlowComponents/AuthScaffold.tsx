import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../themes";
import { layout } from "../../constants/layout";
import AuthHeader from "./AuthHeader";

interface AuthScaffoldProps {
  children: React.ReactNode;
}

const AuthScaffold = ({ children }: AuthScaffoldProps) => {
  return (
    <ScrollView contentContainerStyle={globalStyles.centerRoot}>
      <View>
        <AuthHeader />
      </View>
      <View>{children}</View>
    </ScrollView>
  );
};

export default AuthScaffold;
