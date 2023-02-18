import * as SecureStore from "expo-secure-store";

export const SaveKey = async (key: string, value: string) => {
  const status = await SecureStore.setItemAsync(key, value);
  return status;
};

export const GetKey = async (key: string) => {
  const result = await SecureStore.getItemAsync(key);
  return result;
};

export const DeleteKey = async (key: string) => {
  const status = await SecureStore.deleteItemAsync(key);
  return status;
};
