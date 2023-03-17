import { api } from ".";

export async function UpdateStatus() {
  api.post("/delivery/change-order-status").then((res) => {
    return res.data.data;
  });
}
