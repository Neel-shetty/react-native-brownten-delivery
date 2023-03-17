import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation/Navigator";
import { store } from "./src/store/index";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppLoading } from "./src/utils/AppLoading";
import { NativeBaseProvider } from "native-base";

const queryClient = new QueryClient();

export default function App() {
  return (
    <AppLoading>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <NativeBaseProvider>
            <Navigator />
          </NativeBaseProvider>
        </QueryClientProvider>
      </Provider>
    </AppLoading>
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
