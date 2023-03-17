import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../themes";
import { layout } from "../../constants/layout";
import AuthHeader from "./AuthHeader";

const backgroundTop = require("../../../assets/images/background-top.png");

interface AuthScaffoldProps {
  children: React.ReactNode;
}

const AuthScaffold = ({ children }: AuthScaffoldProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        // ...globalStyles.centerRoot,
        backgroundColor: "#fdfdfd",
      }}
    >
      {/* <View>
        <AuthHeader />
      </View> */}
      <View style={styles.background}>
        <Image style={[StyleSheet.absoluteFill]} source={backgroundTop} />
      </View>
      <View>{children}</View>
    </ScrollView>
  );
};

export default AuthScaffold;

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    width: layout.width,
    justifyContent: "space-between",
    top: 0,
    backgroundColor: "#fdfdfd",
  },
});
