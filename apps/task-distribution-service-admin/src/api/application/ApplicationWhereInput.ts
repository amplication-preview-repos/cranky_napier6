import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";

export type ApplicationWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  content?: StringNullableFilter;
  assignments?: AssignmentListRelationFilter;
};
