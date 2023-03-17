import { Image, Platform, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "../../themes";
import AuthScaffold from "../../components/AuthFlowComponents/AuthScaffold";
import InputFields from "../../components/AuthFlowComponents/SignInScreenComponents/InputFields";
import { layout } from "../../constants/layout";

const logo = require("../../../assets/images/brownten-logo.png");

const SignInScreen = () => {
  const [loading, setLoading] = useState(false);
  const behavior = Platform.OS === "ios" ? "padding" : undefined;
  return (
    <AuthScaffold>
      <View style={styles.root}>
        <Image
          style={{ height: 75, width: layout.width, marginVertical: 20 }}
          source={logo}
          resizeMode="contain"
        />
        <View style={styles.mainContainer}>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.headerTitle}>Sign in</Text>
            <Text style={styles.headerSubtitle}>
              Enter your phone number and password
            </Text>
          </View>
        </View>
        <InputFields />
      </View>
    </AuthScaffold>
  );
};

export default { component: SignInScreen, name: "SignInScreen" };

const styles = StyleSheet.create({
  root: {
    height: layout.height,
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 24,
    height: 24,
    fontFamily: "",
    marginBottom: layout.height * 0.017,
    color: "#181725",
  },
  headerSubtitle: {
    fontSize: 16,
    lineHeight: 16,
    height: 16,
    fontFamily: "",
    marginBottom: layout.height * 0.017,
    color: "#181725",
  },
  mainContainer: {
    width: layout.widthp,
    // alignItems: "center",
    alignSelf: "center",
  },
});
