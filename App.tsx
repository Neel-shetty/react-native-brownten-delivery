import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { store } from "./src/store/index";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
