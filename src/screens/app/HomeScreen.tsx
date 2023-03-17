import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../store/UserSlice";
import { DeleteKey } from "../../utils/SecureStorage";
import { Box } from "native-base";
import { useQuery } from "react-query";
import { api } from "../../api";
import * as SecureStore from "expo-secure-store";
import OrderItem from "../../components/HomeScreenComponents/OrderItem";
import { layout } from "../../constants/layout";
import { MaterialIcons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState<boolean>(false);

  const {
    data: orders,
    isLoading,
    error,
  } = useQuery<any, any>(["orders", refresh], async () => {
    const user_id = await SecureStore.getItemAsync("id");
    console.log(
      "🚀 ~ file: HomeScreen.tsx:16 ~ const{data,isLoading,error}=useQuery ~ user_id:",
      user_id
    );
    setRefresh(false);
    return api.post("/delivery/my-orders", { delivery_boy_id: user_id });
  });

  console.log(
    "🚀 ~ file: HomeScreen.tsx:16 ~ data:",
    orders?.data?.data,
    isLoading,
    error?.response.data
  );

  async function logout() {
    dispatch(setLoggedIn(false));
    await DeleteKey("isLoggedIn");
  }

  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        <View style={{ width: 24 }} />
        <Text style={styles.text}>Orders</Text>
        <TouchableOpacity onPress={logout}>
          <MaterialIcons name="logout" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 8 }}>
        <FlatList
          data={orders?.data?.data}
          renderItem={({ item }) => <OrderItem order={item} />}
          refreshing={refresh}
          onRefresh={() => setRefresh(true)}
        />
      </View>
    </View>
  );
};

export default { name: "HomeScreen", component: HomeScreen };

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
});
