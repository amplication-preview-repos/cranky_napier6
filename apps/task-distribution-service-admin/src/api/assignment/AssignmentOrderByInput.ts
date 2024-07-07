import { SortOrder } from "../../util/SortOrder";

export type AssignmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  assignedAt?: SortOrder;
  applicationId?: SortOrder;
  taskId?: SortOrder;
  employeeId?: SortOrder;
};
