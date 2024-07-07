import * as graphql from "@nestjs/graphql";
import { AssignmentResolverBase } from "./base/assignment.resolver.base";
import { Assignment } from "./base/Assignment";
import { AssignmentService } from "./assignment.service";

@graphql.Resolver(() => Assignment)
export class AssignmentResolver extends AssignmentResolverBase {
  constructor(protected readonly service: AssignmentService) {
    super(service);
  }
}
