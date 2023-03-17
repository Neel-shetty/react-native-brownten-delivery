import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { layout } from "../../constants/layout";
import { Select } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const OrderDetailScreen = () => {
  const [selectedStatus, setSelectedStatus] = useState<string>();

  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <EvilIcons name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Order Detail</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.mainContainer}>
        <Select
          selectedValue={selectedStatus}
          minWidth={layout.widthp}
          placeholder="Choose Delivery Status"
          _selectedItem={{
            bg: "teal.600",
            // endIcon: <CheckIcon size="5" />,
          }}
          mt={1}
          onValueChange={(itemValue) => setSelectedStatus(itemValue)}
        >
          <Select.Item label="Picked Up" value="1" />
          <Select.Item label="Delivered" value="2" />
          <Select.Item label="Shipped" value="3" />
          <Select.Item label="Return" value="4" />
        </Select>
      </View>
    </View>
  );
};

export default { component: OrderDetailScreen, name: "OrderDetailScreen" };

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: 'pink',
    width: layout.width,
    maxHeight: 60,
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    flexDirection: "row",
    paddingHorizontal: layout.width * 0.03,
    marginTop: 10,
  },
  text: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
  },
  mainContainer: {
    flex: 8,
  },
});
