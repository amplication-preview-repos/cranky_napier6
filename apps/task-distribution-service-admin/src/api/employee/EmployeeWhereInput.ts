import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";

export type EmployeeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  assignments?: AssignmentListRelationFilter;
};
