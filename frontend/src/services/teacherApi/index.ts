import axios from "axios";
import { api, settingAxios } from "services";
import { ApiException, Course, User } from "types";

const connectionWithEndpoints = () => ({
  myCourses: async (
    id: number
  ): Promise<(User & { courses: Course[] }) | false> => {
    const settingGeneralAxios = settingAxios();
    if (!settingGeneralAxios) return false;
    const resposta = await api.get(
      `/teacher/${id}/courses`,
      settingGeneralAxios
    );

    return resposta.data;
  },

  create: async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean | ApiException> => {
    try {
      await api.post("/teacher", {
        name,
        email,
        password,
      });

      return true;
    } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) return error.response?.data;

      return false;
    }
  },
});

export const teacherApi = connectionWithEndpoints();
