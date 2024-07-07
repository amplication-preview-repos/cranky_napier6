/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { AssignmentUpdateManyWithoutTasksInput } from "./AssignmentUpdateManyWithoutTasksInput";
import { Type } from "class-transformer";

@InputType()
class TaskUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isCompleted?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  skillRequired?: string | null;

  @ApiProperty({
    required: false,
    type: () => AssignmentUpdateManyWithoutTasksInput,
  })
  @ValidateNested()
  @Type(() => AssignmentUpdateManyWithoutTasksInput)
  @IsOptional()
  @Field(() => AssignmentUpdateManyWithoutTasksInput, {
    nullable: true,
  })
  assignments?: AssignmentUpdateManyWithoutTasksInput;
}

export { TaskUpdateInput as TaskUpdateInput };
