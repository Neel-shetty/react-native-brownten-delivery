import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

interface PrimaryButtonProps {
  onPress: () => void;
}

const PrimaryButton = ({ onPress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>PrimaryButton</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({});
