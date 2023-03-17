import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { layout } from "../../constants/layout";

interface PrimaryButtonProps {
  onPress: () => void;
  title: string;
  loading: boolean;
}

const PrimaryButton = ({
  onPress,
  title,
  loading = false,
}: PrimaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        {loading ? (
          <ActivityIndicator color={"white"} />
        ) : (
          <Text style={styles.text}>{title}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    height: 67,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#53B175",
    alignSelf: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontFamily: "poppins-semibold",
  },
});
