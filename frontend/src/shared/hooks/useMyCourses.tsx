import { useCallback, useEffect, useState } from "react";
import { studentApi } from "services";
import { useAuthContext } from "shared/contexts";
import { Course } from "types";

export const useMyCourses = () => {
  const { user } = useAuthContext();
  const [courses, setCourses] = useState<Course[]>([]);

  const fetcher = useCallback(async () => {
    if (!user) return;
    const student = await studentApi.findOne(user.id);

    if (!student) return;

    return setCourses(student.courses);
  }, []);

  useEffect(() => {
    fetcher();
  }, []);

  return { courses, fetcher };
};
