import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../themes";
import { layout } from "../../constants/layout";

const AuthScaffold = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          resizeMode="cover"
          source={require("../../../assets/images/LoginBackgroundImage.png")}
        />
      </View>
    </ScrollView>
  );
};

export default AuthScaffold;

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.palette.white,
  },
  backgroundContainer: {
    position: "absolute",
    width: layout.width,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  backgroundImage: {
    width: layout.width,
  },
});
