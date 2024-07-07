import { AssignmentCreateNestedManyWithoutTasksInput } from "./AssignmentCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  title?: string | null;
  description?: string | null;
  isCompleted?: boolean | null;
  skillRequired?: string | null;
  assignments?: AssignmentCreateNestedManyWithoutTasksInput;
};
