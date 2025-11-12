import apiClient from "./apiClient";
import { User } from "../types/User";

export const apiRegister = async (
  name: string,
  email: string,
  password: string
) => {
  const { data } = await apiClient.post("/auth/register", {
    name,
    email,
    password,
  });
  return data;
};

export const apiLogin = async (email: string, password: string) => {
  const { data } = await apiClient.post("/auth/login", { email, password });
  return data;
};

export const apiLogout = async () => {
  const { data } = await apiClient.post("/auth/logout");
  return data;
};

export const apiGetProfile = async (
  userId: string = ""
): Promise<{ user: User }> => {
  const { data } = await apiClient.get(`/user/${userId}`); // adjust route if different
  return data;
};

export const apiForgotPassword = async (email: string) => {
  const { data } = await apiClient.post("/passwordReset/forgot-password", {
    email,
  });
  return data;
};

export const apiResetPassword = async (token: string, newPassword: string) => {
  const { data } = await apiClient.post("passwordReset/reset-password", {
    token,
    newPassword,
  });
  return data;
};
