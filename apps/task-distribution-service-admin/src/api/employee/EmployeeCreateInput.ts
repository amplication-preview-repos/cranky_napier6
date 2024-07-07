import { AssignmentCreateNestedManyWithoutEmployeesInput } from "./AssignmentCreateNestedManyWithoutEmployeesInput";

export type EmployeeCreateInput = {
  name?: string | null;
  email?: string | null;
  taskSkills?: Array<"Option1">;
  assignments?: AssignmentCreateNestedManyWithoutEmployeesInput;
};
