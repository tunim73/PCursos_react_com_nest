import { api, settingAxios } from "services";
import { Course, User } from "types";

const connectionWithEndpoints = () => ({
  findOne: async (
    id: number
  ): Promise<(User & { courses: Course[] }) | false> => {
    const settingGeneralAxios = settingAxios();
    if (!settingGeneralAxios) return false;
    const resposta = await api.get(`/student/${id}`, settingGeneralAxios);

    return resposta.data;
  },
});

export const studentApi = connectionWithEndpoints();
