import { Assignment } from "../assignment/Assignment";

export type Employee = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  taskSkills?: Array<"Option1">;
  assignments?: Array<Assignment>;
};
