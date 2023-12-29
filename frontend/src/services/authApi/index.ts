import axios from "axios";
import { api, settingAxios } from "services";
import { ApiException, User } from "types";

const connectionWithEndpoints = () => ({
  signin: async (
    email: string,
    password: string,
    type: string
  ): Promise<{ user: User; token: string } | null | ApiException  > => {
    try {
      const res = await api.post("/auth/login", {
        email,
        password,
        type,
      });
      return res.data;
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) return error.response?.data;
      
      return null;
    }
  },
  profile: async () => {
    const settingGeneralAxios = settingAxios();
    if (!settingGeneralAxios) return false;

    const resposta = await api.get("/auth/profile", settingGeneralAxios);

    return resposta.data;
  },
});

export const authApi = connectionWithEndpoints();
