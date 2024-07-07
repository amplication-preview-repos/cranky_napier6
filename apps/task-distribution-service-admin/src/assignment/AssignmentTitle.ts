import { Assignment as TAssignment } from "../api/assignment/Assignment";

export const ASSIGNMENT_TITLE_FIELD = "id";

export const AssignmentTitle = (record: TAssignment): string => {
  return record.id?.toString() || String(record.id);
};
