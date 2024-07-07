import { AssignmentCreateNestedManyWithoutApplicationsInput } from "./AssignmentCreateNestedManyWithoutApplicationsInput";

export type ApplicationCreateInput = {
  status?: "Option1" | null;
  content?: string | null;
  assignments?: AssignmentCreateNestedManyWithoutApplicationsInput;
};
