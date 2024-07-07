import { Module } from "@nestjs/common";
import { AssignmentModuleBase } from "./base/assignment.module.base";
import { AssignmentService } from "./assignment.service";
import { AssignmentController } from "./assignment.controller";
import { AssignmentResolver } from "./assignment.resolver";

@Module({
  imports: [AssignmentModuleBase],
  controllers: [AssignmentController],
  providers: [AssignmentService, AssignmentResolver],
  exports: [AssignmentService],
})
export class AssignmentModule {}
