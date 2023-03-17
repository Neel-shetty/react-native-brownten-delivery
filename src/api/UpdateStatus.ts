import { api } from ".";
import { Alert } from "react-native";

export async function UpdateStatus({
  id,
  value,
}: {
  id: string;
  value: string;
}) {
  console.log("🚀 ~ file: UpdateStatus.ts:11 ~ id:", id);
  api
    .post("/delivery/change-order-status", {
      order_id: id,
      order_status: value,
    })
    .then((res) => {
      console.log("🚀 ~ file: UpdateStatus.ts:18 ~ .then ~ res:", res.data);
      return res.data.data;
    })
    .catch((error) => {
      console.log("🚀 ~ file: UpdateStatus.ts:22 ~ error:", error);
      Alert.alert("Failed Updating Status");
    });
}
