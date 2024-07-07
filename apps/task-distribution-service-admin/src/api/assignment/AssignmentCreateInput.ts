import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AssignmentCreateInput = {
  assignedAt?: Date | null;
  application?: ApplicationWhereUniqueInput | null;
  task?: TaskWhereUniqueInput | null;
  employee?: EmployeeWhereUniqueInput | null;
};
