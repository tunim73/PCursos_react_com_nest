export interface User {
  id: number;
  name: string;
  email: string;
  type: "teacher" | "student" | "admin";
}
