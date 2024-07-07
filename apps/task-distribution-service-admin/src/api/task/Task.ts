import { Assignment } from "../assignment/Assignment";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  isCompleted: boolean | null;
  skillRequired: string | null;
  assignments?: Array<Assignment>;
};
