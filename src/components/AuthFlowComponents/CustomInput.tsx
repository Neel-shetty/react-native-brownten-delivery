import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { layout } from "../../constants/layout";
import { globalStyles } from "../../themes";

interface CustomInputProps {
  onChangeText: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
  onBlur: {
    (e: React.FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
  value: string;
  placeholder: string;
  label: string;
}

const CustomInput = ({
  onChangeText,
  onBlur,
  value,
  placeholder,
  label,
}: CustomInputProps) => {
  return (
    <View style={[styles.root, globalStyles.alignCenter]}>
      <View style={{ width: layout.widthp }}>
        <Text style={styles.inputLabel}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  root: {
    width: layout.widthp,
    // height: 40,
    // backgroundColor: "pink",
    // marginTop: 10,
    alignSelf: "center",
  },
  input: {
    width: layout.widthp,
    fontSize: 18,
    paddingVertical: layout.height * 0.012,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e2e2",
    marginBottom: layout.height * 0.022,
  },
  inputLabel: {
    fontSize: 16,
    lineHeight: 16,
    height: 16,
    color: "#7c7c7c",
  },
});
