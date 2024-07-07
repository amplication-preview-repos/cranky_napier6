import { Application } from "../application/Application";
import { Task } from "../task/Task";
import { Employee } from "../employee/Employee";

export type Assignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  assignedAt: Date | null;
  application?: Application | null;
  task?: Task | null;
  employee?: Employee | null;
};
