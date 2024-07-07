import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ApplicationWhereUniqueInput } from "../application/ApplicationWhereUniqueInput";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";

export type AssignmentWhereInput = {
  id?: StringFilter;
  assignedAt?: DateTimeNullableFilter;
  application?: ApplicationWhereUniqueInput;
  task?: TaskWhereUniqueInput;
  employee?: EmployeeWhereUniqueInput;
};
