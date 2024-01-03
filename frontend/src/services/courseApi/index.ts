import axios from "axios";
import { api, settingAxios } from "services";
import { ApiException, Course } from "types";

const connectionWithEndpoints = () => ({
  getCourseAndCompletedlesson: async (
    courseId: number,
    studentId: number
  ): Promise<Course | ApiException | false> => {
    const settingGeneralAxios = settingAxios();
    if (!settingGeneralAxios) return false;

    try {
      const response = await api.get(
        `/course/${courseId}/student/${studentId}`,
        settingGeneralAxios
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) return error.response?.data;
      return false;
    }
  },
  getCourseForTeacher: async (
    courseId: number
  ): Promise<Course | ApiException | false> => {
    const settingGeneralAxios = settingAxios();
    if (!settingGeneralAxios) return false;

    try {
      const response = await api.get(
        `/course/${courseId}/teacher/`,
        settingGeneralAxios
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) return error.response?.data;
      return false;
    }
  },
});

export const courseApi = connectionWithEndpoints();
