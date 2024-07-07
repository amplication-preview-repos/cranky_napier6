import { AssignmentUpdateManyWithoutTasksInput } from "./AssignmentUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  title?: string | null;
  description?: string | null;
  isCompleted?: boolean | null;
  skillRequired?: string | null;
  assignments?: AssignmentUpdateManyWithoutTasksInput;
};
