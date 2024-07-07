import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssignmentServiceBase } from "./base/assignment.service.base";

@Injectable()
export class AssignmentService extends AssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
