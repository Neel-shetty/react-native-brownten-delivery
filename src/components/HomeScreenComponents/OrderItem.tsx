import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../themes";
import { layout } from "../../constants/layout";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OrderDetailScreen from "../../screens/app/OrderDetailScreen";
import { Select } from "native-base";
import { EvilIcons } from "@expo/vector-icons";
import { UpdateStatus } from "../../api/UpdateStatus";

const OrderItem = ({ order }: any) => {
  const [selectedStatus, setSelectedStatus] = useState<string>();
  const navigation: any = useNavigation();

  useEffect(() => {
    setSelectedStatus(order.order_status);
  }, []);

  return (
    <>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate(OrderDetailScreen.name)}
      > */}
      <View style={styles.root}>
        <View style={styles.infoContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{order.username}</Text>
          </View>
          <View>
            <Text style={styles.subtitle} numberOfLines={3}>
              {order.shipping_address}
            </Text>
            <Text style={styles.subtitle}>OTP - {order.otp}</Text>
            <Text style={styles.subtitle}>Phone - 9834567890</Text>
            <Text style={styles.subtitle}>
              Payment - {order.payment_method}
            </Text>
            <Text style={styles.subtitle}>Status - {order.order_status}</Text>
          </View>
        </View>
        <View style={styles.editContainer}>
          <Text style={styles.cost}>₹{order.total_amount}</Text>
          <TouchableOpacity>
            <View
              style={{
                height: 40,
                width: 40,
                borderWidth: 1,
                borderRadius: 40,
                alignItems: "center",
                justifyContent: "center",
                borderColor: "#e2e2e2",
              }}
            >
              <Feather name="phone-call" size={18} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* </TouchableOpacity> */}
      <Select
        style={[
          { borderRadius: 10 },
          //@ts-ignore
          { fontFamily: "poppins-medium", color: "black", fontSize: 15 },
        ]}
        selectedValue={selectedStatus}
        minWidth={layout.widthp}
        placeholder="Choose Delivery Status"
        _selectedItem={{
          bg: "#53B175",
          borderRadius: 10,
          color: "white",
          _text: { color: "white", fontFamily: "poppins-medium" },
          // endIcon: <CheckIcon size="5" />,
        }}
        _item={{ _text: { fontFamily: "poppins-medium" } }}
        mt={1}
        dropdownIcon={
          <EvilIcons
            name="chevron-down"
            size={24}
            color={"black"}
            style={{ paddingRight: 10 }}
          />
        }
        onValueChange={async (itemValue) => {
          await UpdateStatus({ id: order.order_id, value: itemValue });
          setSelectedStatus(itemValue);
        }}
      >
        <Select.Item label="Picked Up" value="Picked Up" />
        <Select.Item label="Delivered" value="Delivered" />
        <Select.Item label="Shipped" value="Shipped" />
        <Select.Item label="Return" value="Return" />
        <Select.Item label="Pending" value="Pending" />
      </Select>
      <View
        style={{
          width: layout.width * 0.85,
          borderBottomWidth: 1,
          borderColor: "#E2E2E2",
          paddingBottom: 10,
        }}
      />
    </>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    width: layout.width * 0.85,
    // borderBottomWidth: 1,
    // borderColor: "#E2E2E2",
    paddingTop: 10,
  },
  radioContainer: {
    flex: 1,
    justifyContent: "center",
    marginLeft: 5,
    minWidth: 12,
  },
  infoContainer: {
    flex: 5,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  editContainer: {
    flex: 2,
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    marginRight: 5,
    // backgroundColor: 'pink',
  },
  titleContainer: {},
  title: {
    fontFamily: "poppins-medium",
    fontSize: 16,
    color: "black",
  },
  subtitle: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: "#7C7C7C",
  },
  smallLine: {
    borderWidth: 1,
    width: 12,
    marginRight: 6,
    borderColor: "#E2E2E2",
    marginTop: 7,
    marginBottom: 4,
  },
  cost: {
    fontSize: 20,
    fontFamily: "poppins-regular",
    color: "#53B175",
  },
});
