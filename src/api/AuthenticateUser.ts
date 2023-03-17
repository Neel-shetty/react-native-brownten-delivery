import { api } from ".";

interface SignInParams {
  phone: string;
  password: string;
}

export async function SignInApi({ password, phone }: SignInParams) {
  return api
    .post("/delivery/login", { password: password, phone: phone })
    .then((res) => {
      console.log("🚀 ~ file: AuthenticateUser.ts:12 ~ .then ~ res:", res);
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.log(
        "🚀 ~ file: AuthenticateUser.ts:16 ~ SignInApi ~ error:",
        error
      );
      console.log(error.response);
      return error;
    });
}
