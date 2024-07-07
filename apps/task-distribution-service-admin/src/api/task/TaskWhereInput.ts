import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  isCompleted?: BooleanNullableFilter;
  skillRequired?: StringNullableFilter;
  assignments?: AssignmentListRelationFilter;
};
