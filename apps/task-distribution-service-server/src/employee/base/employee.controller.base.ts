/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EmployeeService } from "../employee.service";
import { EmployeeCreateInput } from "./EmployeeCreateInput";
import { Employee } from "./Employee";
import { EmployeeFindManyArgs } from "./EmployeeFindManyArgs";
import { EmployeeWhereUniqueInput } from "./EmployeeWhereUniqueInput";
import { EmployeeUpdateInput } from "./EmployeeUpdateInput";
import { AssignmentFindManyArgs } from "../../assignment/base/AssignmentFindManyArgs";
import { Assignment } from "../../assignment/base/Assignment";
import { AssignmentWhereUniqueInput } from "../../assignment/base/AssignmentWhereUniqueInput";

export class EmployeeControllerBase {
  constructor(protected readonly service: EmployeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Employee })
  async createEmployee(
    @common.Body() data: EmployeeCreateInput
  ): Promise<Employee> {
    return await this.service.createEmployee({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        taskSkills: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Employee] })
  @ApiNestedQuery(EmployeeFindManyArgs)
  async employees(@common.Req() request: Request): Promise<Employee[]> {
    const args = plainToClass(EmployeeFindManyArgs, request.query);
    return this.service.employees({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        taskSkills: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async employee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    const result = await this.service.employee({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        email: true,
        taskSkills: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEmployee(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() data: EmployeeUpdateInput
  ): Promise<Employee | null> {
    try {
      return await this.service.updateEmployee({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          taskSkills: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Employee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEmployee(
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Employee | null> {
    try {
      return await this.service.deleteEmployee({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          email: true,
          taskSkills: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/assignments")
  @ApiNestedQuery(AssignmentFindManyArgs)
  async findAssignments(
    @common.Req() request: Request,
    @common.Param() params: EmployeeWhereUniqueInput
  ): Promise<Assignment[]> {
    const query = plainToClass(AssignmentFindManyArgs, request.query);
    const results = await this.service.findAssignments(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        assignedAt: true,

        application: {
          select: {
            id: true,
          },
        },

        task: {
          select: {
            id: true,
          },
        },

        employee: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/assignments")
  async connectAssignments(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: AssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assignments: {
        connect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/assignments")
  async updateAssignments(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: AssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assignments: {
        set: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/assignments")
  async disconnectAssignments(
    @common.Param() params: EmployeeWhereUniqueInput,
    @common.Body() body: AssignmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      assignments: {
        disconnect: body,
      },
    };
    await this.service.updateEmployee({
      where: params,
      data,
      select: { id: true },
    });
  }
}
