import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../store/UserSlice";
import { DeleteKey } from "../../utils/SecureStorage";

const HomeScreen = () => {
  const dispatch = useDispatch();
  async function logout() {
    dispatch(setLoggedIn(false));
    await DeleteKey('loggedIn')
  }
  return (
    <View style={styles.root}>
      <Text>HomeScreen</Text>
      <Button title="Log out" onPress={logout} />
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
});
