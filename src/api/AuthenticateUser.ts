import { api } from ".";

interface params {
  username?: string;
  email?: string;
  phoneNumber?: string;
  password: string;
}

export async function AuthenticateUser({
  username,
  email,
  password,
  phoneNumber,
}: params) {
  return api.post("/user/login", { password: password });
  // .then((res) => {
  //   console.log(res.data);
  //   return res.data;
  // })
  // .catch((error) => {
  //   console.log(error.response);
  //   return error
  // });
}
