import { api } from ".";

interface SignInParams {
  phone: string;
  password: string;
}

export async function SignInApi({ password, phone }: SignInParams) {
  return api
    .post("/user/login", { password: password, phone: phone })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error;
    });
}

interface SignUpParams {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export async function SignUpApi({
  password,
  phone,
  email,
  username,
}: SignUpParams) {
  return api
    .post("/user/register", {
      password: password,
      phone: phone,
      email: email,
      name: username,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(error.response);
      return error;
    });
}
