import { AssignmentUpdateManyWithoutApplicationsInput } from "./AssignmentUpdateManyWithoutApplicationsInput";

export type ApplicationUpdateInput = {
  status?: "Option1" | null;
  content?: string | null;
  assignments?: AssignmentUpdateManyWithoutApplicationsInput;
};
