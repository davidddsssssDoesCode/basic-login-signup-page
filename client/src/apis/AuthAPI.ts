import axios from "axios";

const API_LOGIN_URL: string = import.meta.env.VITE_API_LOGIN_URL;
const API_SIGNUP_URL: string = import.meta.env.VITE_API_SIGNUP_URL;

type ReturnMessage = {
  message: string;
  status: boolean;
};

export async function authLogIn(username: string, password: string) {
  const response = await axios.post<ReturnMessage>(API_LOGIN_URL, {
    username: username,
    password: password,
  });

  return response.data;
}

export async function authSignUp(username: string, password: string) {
    const response = await axios.post<ReturnMessage>(API_SIGNUP_URL, {
        username: username,
        password: password,
    });

    return response.data;
}