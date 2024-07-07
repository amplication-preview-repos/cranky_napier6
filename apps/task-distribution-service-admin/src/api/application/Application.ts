import { Assignment } from "../assignment/Assignment";

export type Application = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  content: string | null;
  assignments?: Array<Assignment>;
};
