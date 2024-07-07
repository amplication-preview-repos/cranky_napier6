import { AssignmentUpdateManyWithoutEmployeesInput } from "./AssignmentUpdateManyWithoutEmployeesInput";

export type EmployeeUpdateInput = {
  name?: string | null;
  email?: string | null;
  taskSkills?: Array<"Option1">;
  assignments?: AssignmentUpdateManyWithoutEmployeesInput;
};
