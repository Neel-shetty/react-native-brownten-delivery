import { api } from ".";

interface params {
  username?: string;
  email?: string;
  password: string;
}

export async function AuthenticateUser({ username, email, password }: params) {
  api.post('/')
}
